import { TextWithFont } from "components/design/common/styled";
import { NoPictureView } from "./styled";
import { Center } from "native-base";

const NoPicture = (): JSX.Element => {
  return (
    <NoPictureView>
      <Center>
        <TextWithFont>Nothing new here</TextWithFont>
      </Center>
    </NoPictureView>
  );
};

export default NoPicture;
