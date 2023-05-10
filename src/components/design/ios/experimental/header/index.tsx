import { TouchableOpacity } from "react-native";
import {
  HeaderDetailsView,
  IconsView,
  PageTitleText,
  TopSafeView,
} from "./styled";

import ThemeIcon from "assets/icons/common/ThemeIcon";
import AboutIcon from "assets/icons/common/AboutIcon";

import { useDeviceInsets } from "hooks/useDeviceInsets";
import { useModal } from "hooks/useModal";

const ExperimentalIosHeader = ({ title }: { title: string | undefined }) => {
  const { handleOpenAboutModal } = useModal();
  const { topInset } = useDeviceInsets();

  return (
    <>
      <TopSafeView
        style={{
          height: topInset,
        }}
      />
      <HeaderDetailsView>
        <PageTitleText fontSize="2xl">{title}</PageTitleText>
        <IconsView>
          <TouchableOpacity onPress={handleOpenAboutModal}>
            <AboutIcon />
          </TouchableOpacity>
          <ThemeIcon />
        </IconsView>
      </HeaderDetailsView>
    </>
  );
};

export default ExperimentalIosHeader;
