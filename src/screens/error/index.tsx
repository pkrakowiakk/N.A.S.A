import { TestKey } from "constants/keys/testKeys";
import { ErrorView, RetryButton } from "./styled";
import { ErrorProps } from "./interfaces";
import {
  ButtonTextWithFont,
  TextWithFont,
} from "components/design/common/styled";
import { Center } from "native-base";

const Error = ({ handleRetry, isRetrying }: ErrorProps): JSX.Element => {
  return (
    <ErrorView>
      <Center>
        <TextWithFont fontSize="xl">Houston we have a problem</TextWithFont>
        <TextWithFont fontSize="md">
          Unable to access this nasa resource
        </TextWithFont>
        <RetryButton
          testID={TestKey.RetryButton}
          isLoadingText="Retrying"
          spinnerPlacement="end"
          isLoading={isRetrying}
          onPress={handleRetry}
          size="lg"
        >
          <ButtonTextWithFont fontSize="md">Retry</ButtonTextWithFont>
        </RetryButton>
      </Center>
    </ErrorView>
  );
};

export default Error;
