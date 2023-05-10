import { ChildrenProp } from "interfaces/other/childrenProp";
import { useInjection } from "hooks/useInjection";

const ScreenLayout = ({ children }: ChildrenProp): JSX.Element => {
  const { screenLayoutDesignService } = useInjection();

  const DeviceBasedScreenLayout =
    screenLayoutDesignService.getScreenLayoutDesign();

  return <DeviceBasedScreenLayout>{children}</DeviceBasedScreenLayout>;
};

export default ScreenLayout;
