import LensIcon from "assets/icons/common/LensIcon";
import Details from "./components/details";
import Images from "./components/images";
import Videos from "./components/videos";
import Audios from "./components/audios";

import { useMediaDetails } from "screens/gallery/hooks/useMediaDetails";
import { TextWithFont } from "components/design/common/styled";
import { Actionsheet, Icon, Input } from "native-base";
import { useGallery } from "../../hooks/useGallery";
import { TestKey } from "constants/keys/testKeys";
import { MediaType } from "constants/mediaTypes";
import { TouchableOpacity } from "react-native";
import {
  SearchIconSpacing,
  MediaTypeView,
  GalleryView,
  SearchView,
  SliderView,
} from "./styled";
import { useTheme } from "hooks/useTheme";

const DefaultGalleryScreen = (): JSX.Element => {
  const { canDisplayMediaDetails, handleCloseAsteroidDetails } =
    useMediaDetails();
  const { theme } = useTheme();
  const {
    getMediaTypeLabelColor,
    handleMediaTypeChange,
    isSelectedMediaType,
    handleSearchChange,
    handleSearch,
  } = useGallery();

  return (
    <GalleryView testID={TestKey.Gallery}>
      <MediaTypeView>
        <TouchableOpacity
          onPress={() => handleMediaTypeChange(MediaType.Image)}
        >
          <TextWithFont
            fontSize="lg"
            style={{
              color: getMediaTypeLabelColor(MediaType.Image),
            }}
          >
            Images
          </TextWithFont>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMediaTypeChange(MediaType.Video)}
        >
          <TextWithFont
            fontSize="lg"
            style={{
              color: getMediaTypeLabelColor(MediaType.Video),
            }}
          >
            Videos
          </TextWithFont>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMediaTypeChange(MediaType.Audio)}
        >
          <TextWithFont
            fontSize="lg"
            style={{
              color: getMediaTypeLabelColor(MediaType.Audio),
            }}
          >
            Audios
          </TextWithFont>
        </TouchableOpacity>
      </MediaTypeView>
      <SearchView>
        <Input
          onChangeText={handleSearchChange}
          placeholder="Search"
          variant="rounded"
          size="md"
          InputRightElement={
            <Icon
              as={
                <SearchIconSpacing
                  testID={TestKey.SearchIcon}
                  onPress={handleSearch}
                >
                  <LensIcon color={theme.searchIconColor} />
                </SearchIconSpacing>
              }
            />
          }
        />
      </SearchView>
      <SliderView>
        {isSelectedMediaType(MediaType.Image) && <Images />}
        {isSelectedMediaType(MediaType.Video) && <Videos />}
        {isSelectedMediaType(MediaType.Audio) && <Audios />}
      </SliderView>
      <Actionsheet
        onClose={handleCloseAsteroidDetails}
        isOpen={canDisplayMediaDetails}
      >
        <Details />
      </Actionsheet>
    </GalleryView>
  );
};

export default DefaultGalleryScreen;
