import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { MediaResponse } from "interfaces/responses/media";
import { Response } from "interfaces/responses/response";
import { setImagesData } from "../features/imagesData";
import { setImagesError } from "hooks/features/errors";
import { increaseImagePage } from "../features/page";
import { FetchKey } from "constants/keys/fetchKeys";
import { useInjection } from "hooks/useInjection";
import { MediaType } from "constants/mediaTypes";
import { useFeature } from "hooks/useFeature";
import { Features } from "types/features";
import { useFetch } from "hooks/useFetch";
import { UseImages } from "../interfaces";
import { useEffect } from "react";

export const useImages = (): UseImages => {
  const imagesData = useFeature((features: Features) => features.imagesData);
  const keyword = useFeature((features: Features) => features.searchValue);
  const imagesPage = useFeature(
    (features: Features) => features.mediaPageStatus.image
  );
  const execute = useFeatureExecuter();

  const { mediaResponseMapperService: mediaReponseMapperService } = useInjection();
  const { mediaFetchService } = useInjection();

  const handleImagesError = (): void => {
    execute(setImagesError(isError));
  };

  const handleImageResponse = async (response: Response<MediaResponse>) => {
    const mediaResponseData: MediaResponse = response.data;
    const formattedImagesData = await mediaReponseMapperService(
      mediaResponseData
    );

    const images = [...imagesData, ...formattedImagesData];
    execute(setImagesData(images));
  };

  const handleNasaImagesFetch = (): void => {
    fetch();
  };

  const handleLoadMoreImages = (imageNumber: number): void => {
    if (imageNumber !== imagesData.length - 2) {
      return;
    }
    execute(increaseImagePage());
  };

  useEffect(() => {
    if (imagesPage === 1) {
      return;
    }

    mediaFetchService(MediaType.Image, imagesPage, keyword)
      .then((response) => handleImageResponse(response))
      .catch(() => execute(setImagesError(true)));
  }, [imagesPage]);

  const { isFetching, isError, fetch } = useFetch(
    FetchKey.NasaImages,
    () => mediaFetchService(MediaType.Image, imagesPage, keyword),
    handleImageResponse,
    handleImagesError
  );

  const canDisplayImages: boolean = imagesData.length > 0;

  return {
    handleNasaImagesFetch,
    handleLoadMoreImages,
    canDisplayImages,
    imagesData,
    isFetching,
  };
};
