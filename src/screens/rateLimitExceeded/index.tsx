import { TextWithFont } from "components/design/common/styled";
import { RateLimitView } from "./styled";
import { Center } from "native-base";

const RateLimitExceeded = (): JSX.Element => {
  return (
    <RateLimitView>
      <Center>
        <TextWithFont fontSize="xl">Views limit exceeded</TextWithFont>
        <TextWithFont fontSize="md">Try again in an hour</TextWithFont>
      </Center>
    </RateLimitView>
  );
};

export default RateLimitExceeded;
