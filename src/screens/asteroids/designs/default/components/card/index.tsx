import DangerousIcon from "assets/icons/common/DangerousIcon";
import ExploreIcon from "assets/icons/common/ExploreIcon";
import SafeIcon from "assets/icons/common/SafeIcon";

import { useAsteroidDetails } from "screens/asteroids/hooks/useAsteroidDetails";
import { TextWithFont } from "components/design/common/styled";
import { AsteroidData } from "screens/asteroids/interfaces";
import { TestKey } from "constants/keys/testKeys";
import { TouchableOpacity } from "react-native";
import { useTheme } from "hooks/useTheme";
import {
  DetailsView,
  ExploreView,
  CenterView,
  BoxShadow,
  IconView,
  BoxView,
} from "./styled";

const Card = ({
  asteroidDetails,
}: {
  asteroidDetails: AsteroidData;
}): JSX.Element => {
  const { handleOpenAsteroidDetails } = useAsteroidDetails();
  const { theme } = useTheme();

  return (
    <CenterView>
      <BoxShadow
        startColor={theme.shadowStartColor}
        endColor={theme.shadowEndColor}
        distance={10}
      >
        <BoxView>
          <IconView>
            {asteroidDetails.isPotentiallyHazardous ? (
              <DangerousIcon />
            ) : (
              <SafeIcon />
            )}
          </IconView>
          <DetailsView>
            <TextWithFont fontSize="md">{asteroidDetails.name}</TextWithFont>
            <TextWithFont fontSize="md">
              {asteroidDetails.closestApproachDate}
            </TextWithFont>
          </DetailsView>
          <ExploreView>
            <TouchableOpacity
              onPress={() => handleOpenAsteroidDetails(asteroidDetails)}
              testID={TestKey.ExploreButton}
            >
              <ExploreIcon />
            </TouchableOpacity>
          </ExploreView>
        </BoxView>
      </BoxShadow>
    </CenterView>
  );
};

export default Card;
