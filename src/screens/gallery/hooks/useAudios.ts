import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { MediaResponse } from "interfaces/responses/media";
import { Response } from "interfaces/responses/response";
import { setAudiosData } from "../features/audiosData";
import { setAudiosError } from "hooks/features/errors";
import { increaseAudioPage } from "../features/page";
import { FetchKey } from "constants/keys/fetchKeys";
import { useInjection } from "hooks/useInjection";
import { MediaType } from "constants/mediaTypes";
import { useFeature } from "hooks/useFeature";
import { Features } from "types/features";
import { useFetch } from "hooks/useFetch";
import { UseAudios } from "../interfaces";
import { useEffect } from "react";

export const useAudios = (): UseAudios => {
  const audiosData = useFeature((features: Features) => features.audiosData);
  const keyword = useFeature((features: Features) => features.searchValue);
  const audioPage = useFeature(
    (features: Features) => features.mediaPageStatus.audio
  );
  const execute = useFeatureExecuter();

  const { mediaResponseMapperService: mediaResponseMapperService } = useInjection();
  const { mediaFetchService } = useInjection();

  const handleAudiosError = (): void => {
    execute(setAudiosError(isError));
  };

  const handleAudioResponse = async (response: Response<MediaResponse>) => {
    const mediaResponseData: MediaResponse = response.data;
    const formattedAudiosData = await mediaResponseMapperService(
      mediaResponseData
    );

    const audios = [...audiosData, ...formattedAudiosData];
    execute(setAudiosData(audios));
  };

  const handleNasaAudiosFetch = (): void => {
    fetch();
  };

  const handleLoadMoreAudios = (audioNumber: number): void => {
    if (audioNumber !== audiosData.length - 2) {
      return;
    }
    execute(increaseAudioPage());
  };

  useEffect(() => {
    if (audioPage === 1) {
      return;
    }

    mediaFetchService(MediaType.Audio, audioPage, keyword).then((response) =>
      handleAudioResponse(response).then(() => execute(setAudiosError(true)))
    );
  }, [audioPage]);

  const { isFetching, isError, fetch } = useFetch(
    FetchKey.NasaAudios,
    () => mediaFetchService(MediaType.Audio, audioPage, keyword),
    handleAudioResponse,
    handleAudiosError
  );

  const canDisplayAudios: boolean = audiosData.length > 0;

  return {
    handleNasaAudiosFetch,
    handleLoadMoreAudios,
    canDisplayAudios,
    audiosData,
    isFetching,
  };
};
