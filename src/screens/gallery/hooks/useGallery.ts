import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { clearVideos } from "../features/videosData";
import { clearAudios } from "../features/audiosData";
import { clearImages } from "../features/imagesData";
import { setSearchValue } from "../features/search";
import { setMediaType } from "../features/media";
import { resetPages } from "../features/page";
import { useFeature } from "hooks/useFeature";
import { UseGallery } from "../interfaces";
import { Features } from "types/features";
import { useTheme } from "hooks/useTheme";
import { useImages } from "./useImages";
import { Keyboard } from "react-native";
import { useVideos } from "./useVideos";
import { useAudios } from "./useAudios";

export const useGallery = (): UseGallery => {
  const selectedMediaType = useFeature(
    (features: Features) => features.selectedMediaType
  );

  const searchKeyword = useFeature(
    (features: Features) => features.searchValue
  );

  const { handleNasaImagesFetch } = useImages();
  const { handleNasaVideosFetch } = useVideos();
  const { handleNasaAudiosFetch } = useAudios();
  const { theme } = useTheme();

  const execute = useFeatureExecuter();

  const handleMediaTypeChange = (selectedMediaType: string): void => {
    execute(setMediaType(selectedMediaType));
  };

  const handleSearch = (): void => {
    Keyboard.dismiss();
    execute(clearImages());
    execute(clearVideos());
    execute(clearAudios());
    execute(resetPages());

    handleNasaImagesFetch();
    handleNasaVideosFetch();
    handleNasaAudiosFetch();
  };

  const handleSearchChange = (text: string): void => {
    execute(setSearchValue(text));
  };

  const getMediaTypeLabelColor = (mediaType: string): string =>
    selectedMediaType === mediaType ? theme.selectedMediaType : theme.textColor;

  const isSelectedMediaType = (mediaType: string): boolean =>
    selectedMediaType === mediaType;

  return {
    getMediaTypeLabelColor,
    handleMediaTypeChange,
    isSelectedMediaType,
    handleSearchChange,
    selectedMediaType,
    searchKeyword,
    handleSearch,
  };
};
