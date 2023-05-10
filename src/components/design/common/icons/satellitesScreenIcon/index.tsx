import { useInjection } from "hooks/useInjection";
import { Color } from "types/color";

const SatellitesScreenIcon = ({ color }: { color: Color }): JSX.Element => {
  const { navbarDesignService } = useInjection();

  const SattelitesIcon = navbarDesignService.getSatellitesIcon();

  return <SattelitesIcon color={color} />;
};

export default SatellitesScreenIcon;
