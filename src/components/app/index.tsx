import UnsupportedPlatform from "screens/unsupportedPlatform";
import Providers from "components/providers";
import Splash from "components/splash";

import { supportedPlatforms } from "constants/supportedPlatforms";
import { registerRootComponent } from "expo";
import { Platform } from "react-native";

const App = (): JSX.Element => {
  const isSupportedPlatform: boolean = supportedPlatforms.some(
    (platform) => Platform.OS === platform
  );

  return (
    <>
      {isSupportedPlatform ? (
        <Providers>
          <Splash />
        </Providers>
      ) : (
        <UnsupportedPlatform />
      )}
    </>
  );
};

export default registerRootComponent(App);
