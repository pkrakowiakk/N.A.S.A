import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

const DefaultNoConnectionScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>No internet connection</Text>
    </SafeAreaView>
  );
};

export default DefaultNoConnectionScreen;
