import PauseIcon from "assets/icons/common/PauseIcon";
import NasaIcon from "assets/icons/common/NasaIcon";
import PlayIcon from "assets/icons/common/PlayIcon";

import { AudioPlayerSpacing, NasaAudioView, NasaIconSpacing } from "./styled";
import { MediaData } from "screens/gallery/interfaces";
import { AVPlaybackStatus, Audio } from "expo-av";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useTheme } from "hooks/useTheme";

const NasaAudio = ({
  audioDetails,
}: {
  audioDetails: MediaData;
}): JSX.Element => {
  const [isSoundPlaying, setIsSoundPlaying] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.SoundObject | null>(null);
  const { theme } = useTheme();

  const handleSoundLoad = async (): Promise<void> => {
    const [loadedSound] = await Promise.all([
      await Audio.Sound.createAsync(
        { uri: audioDetails.url },
        { shouldPlay: false }
      ),
      Audio.setAudioModeAsync({ playsInSilentModeIOS: true }),
    ]);

    loadedSound.sound.setOnPlaybackStatusUpdate(handleSoundStatusUpdate);
    setSound(loadedSound);
  };

  const handleSoundStatusUpdate = async (
    status: AVPlaybackStatus
  ): Promise<void> => {
    if (status.isLoaded) {
      if (status.didJustFinish) {
        await sound?.sound.stopAsync();
        setIsSoundPlaying(false);

        const updatedSound = sound;
        updatedSound?.sound.setOnPlaybackStatusUpdate(handleSoundStatusUpdate);
        setSound(updatedSound);
      }
    }
  };

  const handleSoundPlay = async (): Promise<void> => {
    try {
      await sound?.sound.playAsync();
    } finally {
      setIsSoundPlaying(true);
    }
  };

  const handleSoundPause = async (): Promise<void> => {
    try {
      await sound?.sound.pauseAsync();
    } finally {
      setIsSoundPlaying(false);
    }
  };

  useEffect(() => {
    handleSoundLoad();
  }, []);

  return (
    <NasaAudioView>
      <NasaIconSpacing>
        <NasaIcon color={theme.audioIconColor} />
      </NasaIconSpacing>
      <AudioPlayerSpacing>
        {isSoundPlaying ? (
          <TouchableOpacity onPress={handleSoundPause}>
            <PauseIcon color={theme.audioIconColor} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleSoundPlay}>
            <PlayIcon color={theme.audioIconColor} />
          </TouchableOpacity>
        )}
      </AudioPlayerSpacing>
    </NasaAudioView>
  );
};

export default NasaAudio;
