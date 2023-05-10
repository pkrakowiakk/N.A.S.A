import { ChildrenProp } from "interfaces/other/childrenProp";
import { BackgroundView, MainView } from "./styled";

const ExperimentalIosScreenLayout = ({
  children,
}: ChildrenProp): JSX.Element => {
  return (
    <BackgroundView>
      <MainView>{children}</MainView>
    </BackgroundView>
  );
};

export default ExperimentalIosScreenLayout;
