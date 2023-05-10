import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { useInjection } from "hooks/useInjection";

const Header = (props: BottomTabHeaderProps): JSX.Element => {
  const { headerDesignService } = useInjection();

  const DeviceBasedHeader = headerDesignService.getHeaderDesign();

  return <DeviceBasedHeader title={props.route.name} />;
};

export default Header;
