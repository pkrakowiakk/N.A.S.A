import Carousel from "react-native-snap-carousel";
import NasaImage from "./nasaImage";
import Error from "screens/error";
import NoMedia from "../noMedia";

import { useMediaDetails } from "screens/gallery/hooks/useMediaDetails";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { useImages } from "screens/gallery/hooks/useImages";
import { TestKey } from "constants/keys/testKeys";
import { Center, Spinner } from "native-base";
import { useErrors } from "hooks/useErrors";
import {
  ImageCarouselElement,
  ImagesSliderView,
  SpinnerSpacing,
  ImageTitle,
} from "./styled";

const Images = (): JSX.Element => {
  const { handleOpenAsteroidDetails } = useMediaDetails();
  const { isImagesError } = useErrors();
  const {
    handleNasaImagesFetch,
    handleLoadMoreImages,
    canDisplayImages,
    imagesData,
    isFetching,
  } = useImages();

  return (
    <View testID={TestKey.Images}>
      {isImagesError ? (
        <Error handleRetry={handleNasaImagesFetch} isRetrying={isFetching} />
      ) : (
        <ImagesSliderView>
          {isFetching ? (
            <SpinnerSpacing>
              <Spinner size="lg" testID={TestKey.Spinner} />
            </SpinnerSpacing>
          ) : canDisplayImages ? (
            <Carousel
              itemWidth={Dimensions.get("screen").width / 1.25}
              sliderWidth={Dimensions.get("screen").width}
              onSnapToItem={handleLoadMoreImages}
              testID={TestKey.Carousel}
              data={imagesData}
              layout="default"
              renderItem={({ item }) => (
                <ImageCarouselElement key={item.title}>
                  <NasaImage imageDetails={item} />
                  <Center>
                    <TouchableOpacity
                      onPress={() => handleOpenAsteroidDetails(item)}
                    >
                      <ImageTitle fontSize="md" underline>
                        {item.title}
                      </ImageTitle>
                    </TouchableOpacity>
                  </Center>
                </ImageCarouselElement>
              )}
            />
          ) : (
            <NoMedia />
          )}
        </ImagesSliderView>
      )}
    </View>
  );
};

export default Images;
