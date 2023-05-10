import AboutIcon from "assets/icons/common/AboutIcon";
import ThemeIcon from "assets/icons/common/ThemeIcon";

import { TopSafeView, HeaderView, IconsView, PageTitleText } from "./styled";
import { useDeviceInsets } from "hooks/useDeviceInsets";
import { TouchableOpacity } from "react-native";
import { useModal } from "hooks/useModal";

const DefaultAndroidHeader = ({ title }: { title: string | undefined }) => {
  const { handleOpenAboutModal } = useModal();
  const { topInset } = useDeviceInsets();

  return (
    <>
      <TopSafeView
        style={{
          height: topInset,
        }}
      />
      <HeaderView>
        <PageTitleText fontSize="2xl">{title}</PageTitleText>
        <IconsView>
          <TouchableOpacity onPress={handleOpenAboutModal}>
            <AboutIcon />
          </TouchableOpacity>
          <ThemeIcon />
        </IconsView>
      </HeaderView>
    </>
  );
};

export default DefaultAndroidHeader;
