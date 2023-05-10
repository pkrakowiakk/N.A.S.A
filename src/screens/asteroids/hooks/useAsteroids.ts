import { AsteroidsResponse } from "interfaces/responses/asteroids";
import { setAsteroidsRateLimit } from "hooks/features/rateLimits";
import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { useAsteroidsExplore } from "./useAsteroidsExplore";
import { setAsteroidsError } from "hooks/features/errors";
import { setAsteroidsData } from "../features/asteroids";
import { Response } from "interfaces/responses/response";
import { FetchKey } from "constants/keys/fetchKeys";
import { useInjection } from "hooks/useInjection";
import { useFeature } from "hooks/useFeature";
import { UseAsteroids } from "../interfaces";
import { Features } from "types/features";
import { useFetch } from "hooks/useFetch";


export const useAsteroids = (): UseAsteroids => {
  const asteroidsTimeInterval = useFeature(
    (features: Features) => features.asteroidsTimeInterval
  );
  const asteroidsData = useFeature(
    (features: Features) => features.asteroidsData
  );
  const execute = useFeatureExecuter();

  const {
    canDisplayAsteroidsExplore: isExploreModalDisplayed,
    handleCloseAsteroidsExplore,
  } = useAsteroidsExplore();

  const { asteroidsResponseMapperService } = useInjection();
  const { asteroidsFetchService } = useInjection();

  const handleAsteroidsFetch = (): void => {
    fetch();
  };

  const handleAsteroidsError = (): void => {
    execute(setAsteroidsError(isError));
  };

  const handleAsteroidsResponse = (
    response: Response<AsteroidsResponse>
  ): void => {
    handleRateLimit(response);

    const formattedAsteroidsData = asteroidsResponseMapperService(
      response.data.near_earth_objects,
      asteroidsTimeInterval.startDate,
      asteroidsTimeInterval.endDate
    );

    execute(setAsteroidsData(formattedAsteroidsData));

    if (isExploreModalDisplayed) {
      handleCloseAsteroidsExplore();
    }
  };

  const handleRateLimit = (response: Response<AsteroidsResponse>): void => {
    const responseHeaders = response.headers;
    execute(
      setAsteroidsRateLimit({
        remaining: responseHeaders["x-ratelimit-remaining"],
        limit: responseHeaders["x-ratelimit-limit"],
      })
    );
  };

  const { isFetching, isFetched, isError, fetch } = useFetch(
    FetchKey.Asteroids,
    () =>
      asteroidsFetchService(
        asteroidsTimeInterval.startDate,
        asteroidsTimeInterval.endDate
      ),
    handleAsteroidsResponse,
    handleAsteroidsError
  );

  const areAsteroidsFound: boolean = asteroidsData.length > 0;

  return {
    handleAsteroidsFetch,
    areAsteroidsFound,
    asteroidsData,
    isFetching,
    isFetched,
    isError,
  };
};
