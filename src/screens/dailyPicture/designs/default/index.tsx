import NoPicture from "./components/NoPicture";

import { useDailyPicture } from "screens/dailyPicture/hooks/useDailyPicture";
import { TextWithFont } from "components/design/common/styled";
import { Actionsheet, Center } from "native-base";
import { TestKey } from "constants/keys/testKeys";
import { TouchableOpacity } from "react-native";
import { useTheme } from "hooks/useTheme";
import { useSheet } from "hooks/useSheet";
import {
  ContentText,
  ContentView,
  TitleView,
} from "components/common/Sheet/styled";
import {
  ImageContainer,
  ImageTitleView,
  StyledImage,
  ImageTitle,
} from "./styled";

const DefaultDailyPictureScreen = (): JSX.Element => {
  const { dailyPictureData, canDisplayDailyPicture } = useDailyPicture();
  const { theme } = useTheme();
  const {
    handleCloseDailyPictureSheet,
    handleOpenDailyPictureSheet,
    canDisplayDailyPictureSheet,
  } = useSheet();

  return (
    <>
      {canDisplayDailyPicture ? (
        <>
          <ImageContainer testID={TestKey.DailyPicture}>
            <StyledImage
              source={dailyPictureData.imageUrl}
              contentFit="cover"
              transition={1000}
            />
          </ImageContainer>
          <ImageTitleView>
            <Center>
              <TouchableOpacity>
                <ImageTitle
                  onPress={handleOpenDailyPictureSheet}
                  fontSize="lg"
                  underline
                >
                  {dailyPictureData.imageTitle}
                </ImageTitle>
              </TouchableOpacity>
            </Center>
          </ImageTitleView>
          <Actionsheet
            onClose={handleCloseDailyPictureSheet}
            isOpen={canDisplayDailyPictureSheet}
          >
            <Actionsheet.Content
              style={{ backgroundColor: theme.screen.backgroundColor }}
            >
              <TitleView>
                <Center>
                  <TextWithFont fontSize="lg" style={{ textAlign: "center" }}>
                    {dailyPictureData.imageTitle}
                  </TextWithFont>
                </Center>
              </TitleView>
              <ContentView showsVerticalScrollIndicator={false}>
                <Center>
                  <ContentText fontSize="sm">
                    {dailyPictureData.imageDescription}
                  </ContentText>
                </Center>
              </ContentView>
            </Actionsheet.Content>
          </Actionsheet>
        </>
      ) : (
        <NoPicture />
      )}
    </>
  );
};

export default DefaultDailyPictureScreen;
