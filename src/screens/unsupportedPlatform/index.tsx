import { SafeAreaView, Text } from "react-native";

const UnsupportedPlatform = (): JSX.Element => (
  <SafeAreaView
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    }}
  >
    <Text>Sorry this platform is currently not supported</Text>
  </SafeAreaView>
);

export default UnsupportedPlatform;
