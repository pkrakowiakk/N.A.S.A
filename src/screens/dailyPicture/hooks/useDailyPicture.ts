import { DailyPictureResponse } from "interfaces/responses/dailyPicture";
import { setDailyPictureRateLimit } from "hooks/features/rateLimits";
import { setDailyPictureData } from "../features/dailyPictureData";
import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { setDailyPictureError } from "hooks/features/errors";
import { Response } from "interfaces/responses/response";
import { FetchKey } from "constants/keys/fetchKeys";
import { useInjection } from "hooks/useInjection";
import { MediaType } from "constants/mediaTypes";
import { UseDailyPicture } from "../interfaces";
import { useFeature } from "hooks/useFeature";
import { useFetch } from "hooks/useFetch";
import { Features } from "types/features";

export const useDailyPicture = (): UseDailyPicture => {
  const dailyPictureData = useFeature(
    (features: Features) => features.dailyPictureData
  );
  const execute = useFeatureExecuter();

  const { dailyPictureResponseMapperService } = useInjection();
  const { dailyPictureFetchService } = useInjection();

  const handleDailyPictureError = (): void => {
    execute(setDailyPictureError(isError));
  };

  const handleDailyPictureResponse = (
    response: Response<DailyPictureResponse>
  ): void => {
    handleRateLimit(response);

    const formattedDailyPictureData = dailyPictureResponseMapperService(
      response.data
    );
    execute(setDailyPictureData(formattedDailyPictureData));
  };

  const handleRateLimit = (response: Response<DailyPictureResponse>): void => {
    const responseHeaders = response.headers;
    execute(
      setDailyPictureRateLimit({
        remaining: responseHeaders["x-ratelimit-remaining"],
        limit: responseHeaders["x-ratelimit-limit"],
      })
    );
  };

  const handleDailyPictureFetch = (): void => {
    fetch();
  };

  const canDisplayDailyPicture = (): boolean =>
    dailyPictureData.type === MediaType.Image;

  const { isFetching, isError, fetch } = useFetch(
    FetchKey.DailyPicture,
    dailyPictureFetchService,
    handleDailyPictureResponse,
    handleDailyPictureError
  );

  return {
    canDisplayDailyPicture: canDisplayDailyPicture(),
    handleDailyPictureFetch,
    dailyPictureData,
    isFetching,
    isError,
  };
};
