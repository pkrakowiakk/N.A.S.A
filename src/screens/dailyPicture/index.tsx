import ScreenLayout from "components/design/common/screenLayout";
import RateLimitExceeded from "screens/rateLimitExceeded";
import Error from "screens/error";

import { useDailyPicture } from "./hooks/useDailyPicture";
import { useRateLimits } from "hooks/useRateLimits";
import { useInjection } from "hooks/useInjection";
import { useErrors } from "hooks/useErrors";

const DailyPictureScreen = (): JSX.Element => {
  const { isDailyPictureRateLimitExceeded: isDailyPictureRateLimitExceeded } =
    useRateLimits();
  const { handleDailyPictureFetch, isFetching } = useDailyPicture();
  const { screensDesignService } = useInjection();
  const { isDailyPictureError } = useErrors();

  const DailyPicture = screensDesignService.getDailyPictureScreenDesign();

  return (
    <ScreenLayout>
      {isDailyPictureRateLimitExceeded ? (
        <RateLimitExceeded />
      ) : isDailyPictureError ? (
        <Error handleRetry={handleDailyPictureFetch} isRetrying={isFetching} />
      ) : (
        <DailyPicture />
      )}
    </ScreenLayout>
  );
};

export default DailyPictureScreen;
