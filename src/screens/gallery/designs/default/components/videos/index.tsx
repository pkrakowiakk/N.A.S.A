import Carousel from "react-native-snap-carousel";
import NasaVideo from "./nasaVideo";
import Error from "screens/error";
import NoMedia from "../noMedia";

import { useMediaDetails } from "screens/gallery/hooks/useMediaDetails";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { useVideos } from "screens/gallery/hooks/useVideos";
import { TestKey } from "constants/keys/testKeys";
import { ImageTitle } from "../images/styled";
import { Center, Spinner } from "native-base";
import { useErrors } from "hooks/useErrors";
import {
  VideoCarouselElement,
  VideoSliderView,
  SpinnerSpacing,
} from "./styled";

const Videos = (): JSX.Element => {
  const { handleOpenAsteroidDetails } = useMediaDetails();
  const { isVideosError } = useErrors();
  const {
    handleNasaVideosFetch,
    handleLoadMoreVideos,
    canDisplayVideos,
    videosData,
    isFetching,
  } = useVideos();

  return (
    <View testID={TestKey.Videos}>
      {isVideosError ? (
        <Error handleRetry={handleNasaVideosFetch} isRetrying={isFetching} />
      ) : (
        <VideoSliderView>
          {isFetching ? (
            <SpinnerSpacing>
              <Spinner size="lg" testID={TestKey.Spinner} />
            </SpinnerSpacing>
          ) : canDisplayVideos ? (
            <Carousel
              itemWidth={Dimensions.get("screen").width / 1.25}
              sliderWidth={Dimensions.get("screen").width}
              onSnapToItem={handleLoadMoreVideos}
              testID={TestKey.Carousel}
              lockScrollWhileSnapping
              data={videosData}
              layout="default"
              renderItem={({ item }) => {
                return (
                  <VideoCarouselElement key={item.title}>
                    <NasaVideo videoDetails={item} />
                    <Center>
                      <TouchableOpacity
                        onPress={() => handleOpenAsteroidDetails(item)}
                      >
                        <ImageTitle fontSize="md" underline>
                          {item.title}
                        </ImageTitle>
                      </TouchableOpacity>
                    </Center>
                  </VideoCarouselElement>
                );
              }}
            />
          ) : (
            <NoMedia />
          )}
        </VideoSliderView>
      )}
    </View>
  );
};

export default Videos;
