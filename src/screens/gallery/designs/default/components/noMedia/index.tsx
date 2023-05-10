import { TestKey } from "constants/keys/testKeys";
import { NoMediaView } from "./styled";
import { Center } from "native-base";
import { TextWithFont } from "components/design/common/styled";

const NoMedia = (): JSX.Element => {
  return (
    <NoMediaView testID={TestKey.NoMedia}>
      <Center>
        <TextWithFont fontSize="xl">
          No media found for this keyword
        </TextWithFont>
      </Center>
    </NoMediaView>
  );
};

export default NoMedia;
