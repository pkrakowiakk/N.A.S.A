import { useMediaDetails } from "screens/gallery/hooks/useMediaDetails";
import { TextWithFont } from "components/design/common/styled";
import { Actionsheet, Center } from "native-base";
import { useTheme } from "hooks/useTheme";
import {
  ContentText,
  ContentView,
  TitleView,
} from "components/common/Sheet/styled";

const Details = (): JSX.Element => {
  const { mediaDetails } = useMediaDetails();
  const { theme } = useTheme();

  return (
    <Actionsheet.Content
      style={{ backgroundColor: theme.screen.backgroundColor }}
    >
      <TitleView>
        <Center>
          <TextWithFont fontSize="lg" style={{ textAlign: "center" }}>
            {mediaDetails.title}
          </TextWithFont>
          <TextWithFont fontSize="md">{mediaDetails.date}</TextWithFont>
        </Center>
      </TitleView>
      <ContentView showsVerticalScrollIndicator={false}>
        <Center>
          <ContentText fontSize="sm">{mediaDetails.description}</ContentText>
        </Center>
      </ContentView>
    </Actionsheet.Content>
  );
};

export default Details;
