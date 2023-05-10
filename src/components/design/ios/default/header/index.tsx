import { TouchableOpacity } from "react-native";
import {
  HeaderDetailsView,
  LeftIconView,
  PageTitleText,
  RightIconView,
  TopSafeView,
} from "./styled";
import AboutIcon from "assets/icons/common/AboutIcon";
import ThemeIcon from "assets/icons/common/ThemeIcon";
import { useDeviceInsets } from "hooks/useDeviceInsets";
import { useModal } from "hooks/useModal";

const DefaultlIosHeader = ({ title }: { title: string | undefined }) => {
  const { handleOpenModal } = useModal();
  const { topInset } = useDeviceInsets();

  return (
    <>
      <TopSafeView
        style={{
          height: topInset,
        }}
      />
      <HeaderDetailsView>
        <LeftIconView>
          <TouchableOpacity onPress={handleOpenModal}>
            <AboutIcon />
          </TouchableOpacity>
        </LeftIconView>
        <PageTitleText>{title}</PageTitleText>
        <RightIconView>
          <ThemeIcon />
        </RightIconView>
      </HeaderDetailsView>
    </>
  );
};

export default DefaultlIosHeader;
