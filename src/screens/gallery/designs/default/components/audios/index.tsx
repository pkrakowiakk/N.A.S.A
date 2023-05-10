import Carousel from "react-native-snap-carousel";
import NasaAudio from "./nasaAudio";
import Error from "screens/error";
import NoMedia from "../noMedia";

import { useMediaDetails } from "screens/gallery/hooks/useMediaDetails";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { useAudios } from "screens/gallery/hooks/useAudios";
import { TestKey } from "constants/keys/testKeys";
import { ImageTitle } from "../images/styled";
import { Center, Spinner } from "native-base";
import { useErrors } from "hooks/useErrors";
import {
  AudioCarouselElement,
  AudioSliderView,
  SpinnerSpacing,
} from "./styled";

const Audios = (): JSX.Element => {
  const { handleOpenAsteroidDetails } = useMediaDetails();
  const { isAudiosError } = useErrors();
  const {
    handleNasaAudiosFetch,
    handleLoadMoreAudios,
    canDisplayAudios,
    audiosData,
    isFetching,
  } = useAudios();

  return (
    <View testID={TestKey.Audios}>
      {isAudiosError ? (
        <Error handleRetry={handleNasaAudiosFetch} isRetrying={isFetching} />
      ) : (
        <AudioSliderView>
          {isFetching ? (
            <SpinnerSpacing>
              <Spinner size="lg" testID={TestKey.Spinner} />
            </SpinnerSpacing>
          ) : canDisplayAudios ? (
            <Carousel
              itemWidth={Dimensions.get("screen").width / 1.25}
              sliderWidth={Dimensions.get("screen").width}
              onSnapToItem={handleLoadMoreAudios}
              testID={TestKey.Carousel}
              data={audiosData}
              layout="default"
              renderItem={({ item }) => {
                return (
                  <AudioCarouselElement key={item.title}>
                    <NasaAudio audioDetails={item} />
                    <Center>
                      <TouchableOpacity
                        onPress={() => handleOpenAsteroidDetails(item)}
                      >
                        <ImageTitle fontSize="md" underline>
                          {item.title}
                        </ImageTitle>
                      </TouchableOpacity>
                    </Center>
                  </AudioCarouselElement>
                );
              }}
            />
          ) : (
            <NoMedia />
          )}
        </AudioSliderView>
      )}
    </View>
  );
};

export default Audios;
