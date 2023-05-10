import React from "react";

import { Video, ResizeMode, Audio, AVPlaybackStatus } from "expo-av";
import { MediaData } from "screens/gallery/interfaces";
import { useEffect, useRef, useState } from "react";
import { NasaVideoView } from "./styled";

const NasaVideo = ({
  videoDetails,
}: {
  videoDetails: MediaData;
}): JSX.Element => {
  const [videoStatus, setVideoStatus] = useState<AVPlaybackStatus | null>(null);
  const video = useRef<Video | null>(null);

  const isVideoPlaying: boolean | undefined =
    videoStatus?.isLoaded && videoStatus.isPlaying;

  const enableVideoSound = async (
    video: React.MutableRefObject<Video | null>
  ): Promise<void> => {
    await Audio.setAudioModeAsync({
      staysActiveInBackground: false,
      playsInSilentModeIOS: true,
    });
    video.current?.playAsync();
  };

  useEffect(() => {
    if (isVideoPlaying) {
      enableVideoSound(video);
    }
  }, [video, isVideoPlaying]);

  return (
    <NasaVideoView
      onPlaybackStatusUpdate={(status) => setVideoStatus(status)}
      source={{ uri: videoDetails.url }}
      resizeMode={ResizeMode.CONTAIN}
      shouldPlay={false}
      useNativeControls
      ref={video}
    />
  );
};

export default NasaVideo;
