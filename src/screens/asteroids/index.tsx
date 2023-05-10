import ScreenLayout from "components/design/common/screenLayout";
import RateLimitExceeded from "screens/rateLimitExceeded";
import Error from "screens/error";

import { useAsteroids } from "./hooks/useAsteroids";
import { useRateLimits } from "hooks/useRateLimits";
import { useInjection } from "hooks/useInjection";
import { useErrors } from "hooks/useErrors";

const AsteroidsScreen = (): JSX.Element => {
  const { handleAsteroidsFetch, isFetching } = useAsteroids();
  const { isAsteroidsRateLimitExceeded: isAsteroidsRateLimitExceeded } = useRateLimits();
  const { screensDesignService } = useInjection();
  const { isAsteroidsError } = useErrors();

  const Asteroids = screensDesignService.getAsteroidsScreenDesign();

  return (
    <ScreenLayout>
      {isAsteroidsRateLimitExceeded ? (
        <RateLimitExceeded />
      ) : isAsteroidsError ? (
        <Error handleRetry={handleAsteroidsFetch} isRetrying={isFetching} />
      ) : (
        <Asteroids />
      )}
    </ScreenLayout>
  );
};

export default AsteroidsScreen;
