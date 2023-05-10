import { ChildrenProp } from "interfaces/other/childrenProp";
import { BackgroundView, MainView } from "./styled";

const DefaultAndroidScreenLayout = ({
  children,
}: ChildrenProp): JSX.Element => {
  return (
    <BackgroundView>
      <MainView>{children}</MainView>
    </BackgroundView>
  );
};

export default DefaultAndroidScreenLayout;
