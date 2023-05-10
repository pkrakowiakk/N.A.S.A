import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { MediaResponse } from "interfaces/responses/media";
import { Response } from "interfaces/responses/response";
import { setVideosData } from "../features/videosData";
import { setVideosError } from "hooks/features/errors";
import { increaseVideoPage } from "../features/page";
import { FetchKey } from "constants/keys/fetchKeys";
import { useInjection } from "hooks/useInjection";
import { MediaType } from "constants/mediaTypes";
import { useFeature } from "hooks/useFeature";
import { Features } from "types/features";
import { useFetch } from "hooks/useFetch";
import { UseVideos } from "../interfaces";
import { useEffect } from "react";

export const useVideos = (): UseVideos => {
  const videosData = useFeature((features: Features) => features.videosData);
  const keyword = useFeature((features: Features) => features.searchValue);
  const videosPage = useFeature(
    (features: Features) => features.mediaPageStatus.video
  );
  const execute = useFeatureExecuter();

  const { mediaResponseMapperService: mediaResponseMapperService } =
    useInjection();
  const { mediaFetchService } = useInjection();

  const handleVideosError = (): void => {
    execute(setVideosError(isError));
  };

  const handleVideoResponse = async (response: Response<MediaResponse>) => {
    const mediaResponseData: MediaResponse = response.data;
    const formattedVideosData = await mediaResponseMapperService(
      mediaResponseData
    );

    const videos = [...videosData, ...formattedVideosData];
    execute(setVideosData(videos));
  };

  const handleNasaVideosFetch = (): void => {
    fetch();
  };

  const handleLoadMoreVideos = (videoNumber: number): void => {
    if (videoNumber !== videosData.length - 2) {
      return;
    }

    execute(increaseVideoPage());
  };

  useEffect(() => {
    if (videosPage === 1) {
      return;
    }

    mediaFetchService(MediaType.Video, videosPage, keyword).then((response) =>
      handleVideoResponse(response).catch(() => execute(setVideosError(true)))
    );
  }, [videosPage]);

  const { isFetching, isError, fetch } = useFetch(
    FetchKey.NasaVideos,
    () => mediaFetchService(MediaType.Video, videosPage, keyword),
    handleVideoResponse,
    handleVideosError
  );

  const canDisplayVideos: boolean = videosData.length > 0;

  return {
    handleNasaVideosFetch,
    handleLoadMoreVideos,
    canDisplayVideos,
    videosData,
    isFetching,
  };
};
