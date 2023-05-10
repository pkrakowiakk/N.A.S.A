import ScreenLayout from "components/design/common/screenLayout";
import Error from "screens/error";

import { useSatellites } from "./hooks/useSatellites";
import { useInjection } from "hooks/useInjection";
import { useErrors } from "hooks/useErrors";

const SatellitesScreen = (): JSX.Element => {
  const { handleSatellitesFetch, isFetching } = useSatellites();
  const { screensDesignService } = useInjection();
  const { isSatellitesError } = useErrors();

  const Satellites = screensDesignService.getSatellitesScreenDesign();

  return (
    <ScreenLayout>
      {isSatellitesError ? (
        <Error handleRetry={handleSatellitesFetch} isRetrying={isFetching} />
      ) : (
        <Satellites />
      )}
    </ScreenLayout>
  );
};

export default SatellitesScreen;
