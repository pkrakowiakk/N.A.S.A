import { TextWithFont } from "components/design/common/styled";
import { TestKey } from "constants/keys/testKeys";
import { NoAsteroidsView } from "./styled";
import { Center } from "native-base";

const NoAsteroids = (): JSX.Element => {
  return (
    <NoAsteroidsView testID={TestKey.NoAsteroids}>
      <Center>
        <TextWithFont fontSize="xl">
          No asteroids found for selected time interval
        </TextWithFont>
      </Center>
    </NoAsteroidsView>
  );
};

export default NoAsteroids;
