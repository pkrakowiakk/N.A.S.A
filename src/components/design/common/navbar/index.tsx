import { NavbarProps } from "interfaces/design/navbar/navbarProps";
import { useInjection } from "hooks/useInjection";

const Navigator = (props: NavbarProps): JSX.Element => {
  const { navbarDesignService } = useInjection();

  const DeviceBasedNavigator = navbarDesignService.getNavbarDesign();
  return <DeviceBasedNavigator {...props} />;
};

export default Navigator;
