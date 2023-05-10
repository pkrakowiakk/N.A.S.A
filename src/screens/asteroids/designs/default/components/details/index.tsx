import { useAsteroidDetails } from "screens/asteroids/hooks/useAsteroidDetails";
import { Actionsheet, Center, Divider, View } from "native-base";
import { TextWithFont } from "components/design/common/styled";
import { Detail, DetailsContent, InnerDetail } from "./styled";
import { TitleView } from "components/common/Sheet/styled";
import { TestKey } from "constants/keys/testKeys";
import { useTheme } from "hooks/useTheme";

const Details = (): JSX.Element => {
  const { asteroidDetails } = useAsteroidDetails();
  const { theme } = useTheme();

  const details: Array<{
    label: string;
    value: string | number;
  }> = [
    {
      label: "Is potentially dangerous",
      value: asteroidDetails.isPotentiallyHazardous ? "Yes" : "No",
    },
    {
      label: "Closest approach",
      value: asteroidDetails.closestApproachDate,
    },
    {
      label: "Orbiting body",
      value: asteroidDetails.orbitingBody,
    },
    {
      label: "Magnitude",
      value: asteroidDetails.magnitude,
    },
  ];

  const missDistanceDetails: Array<{
    key: number;
    label: string;
    value: string | number;
  }> = [
    {
      key: 0,
      label: "Astronomical",
      value: asteroidDetails.missDistance.astronomicalMissDistance,
    },
    {
      key: 1,
      label: "Lunar",
      value: asteroidDetails.missDistance.astronomicalMissDistance,
    },
    {
      key: 2,
      label: "Kilometers",
      value: asteroidDetails.missDistance.missDistanceInKilometers,
    },
    {
      key: 3,
      label: "Miles",
      value: asteroidDetails.missDistance.missDistanceInMiles,
    },
  ];

  const relativeVelocityDetails: Array<{
    key: number;
    label: string;
    value: string | number;
  }> = [
    {
      key: 4,
      label: "Km/h",
      value: asteroidDetails.relativeVelocity.velocityKilometersPerHour,
    },
    {
      key: 5,
      label: "Km/s",
      value: asteroidDetails.relativeVelocity.velocityKilometersPerSecond,
    },
    {
      key: 6,
      label: "M/h",
      value: asteroidDetails.relativeVelocity.velocityMilesPerHour,
    },
  ];

  const diameterDetails: Array<{
    key: number;
    label: string;
    value: string | number;
  }> = [
    {
      key: 7,
      label: "Kilometers",
      value: `${asteroidDetails.estimatedDiameters.kilometers.minDiameter} - ${asteroidDetails.estimatedDiameters.kilometers.maxDiameter}`,
    },
    {
      key: 8,
      label: "Meters",
      value: `${asteroidDetails.estimatedDiameters.meters.minDiameter} - ${asteroidDetails.estimatedDiameters.meters.maxDiameter}`,
    },
    {
      key: 9,
      label: "Miles",
      value: `${asteroidDetails.estimatedDiameters.miles.minDiameter} - ${asteroidDetails.estimatedDiameters.miles.maxDiameter}`,
    },
    {
      key: 10,
      label: "Feet",
      value: `${asteroidDetails.estimatedDiameters.feet.minDiameter} - ${asteroidDetails.estimatedDiameters.feet.maxDiameter}`,
    },
  ];

  return (
    <Actionsheet.Content
      testID={TestKey.AstroidDetails}
      style={{ backgroundColor: theme.screen.backgroundColor }}
    >
      <TitleView>
        <Center>
          <TextWithFont fontSize="xl">{asteroidDetails.name}</TextWithFont>
        </Center>
      </TitleView>
      <DetailsContent showsVerticalScrollIndicator={false}>
        {details.map((detail) => (
          <View key={detail.label}>
            <Detail>
              <TextWithFont fontSize="md">{detail.label}</TextWithFont>
              <TextWithFont fontSize="md">{detail.value}</TextWithFont>
            </Detail>
            <Divider />
          </View>
        ))}
        <Detail>
          <TextWithFont fontSize="md">Miss distance</TextWithFont>
        </Detail>
        {missDistanceDetails.map((missDistanceDetail) => (
          <InnerDetail key={missDistanceDetail.key}>
            <TextWithFont fontSize="md">
              {missDistanceDetail.label}
            </TextWithFont>
            <TextWithFont fontSize="md">
              {missDistanceDetail.value}
            </TextWithFont>
          </InnerDetail>
        ))}
        <Divider />
        <Detail>
          <TextWithFont fontSize="md">Relative velocity</TextWithFont>
        </Detail>
        {relativeVelocityDetails.map((relativeVelocityDetail) => (
          <InnerDetail key={relativeVelocityDetail.key}>
            <TextWithFont fontSize="md">
              {relativeVelocityDetail.label}
            </TextWithFont>
            <TextWithFont fontSize="md">
              {relativeVelocityDetail.value}
            </TextWithFont>
          </InnerDetail>
        ))}
        <Divider />
        <Detail>
          <TextWithFont fontSize="md">Estimated diameter</TextWithFont>
        </Detail>
        {diameterDetails.map((diameterDetail) => (
          <InnerDetail key={diameterDetail.key}>
            <TextWithFont fontSize="md">{diameterDetail.label}</TextWithFont>
            <TextWithFont fontSize="md">{diameterDetail.value}</TextWithFont>
          </InnerDetail>
        ))}
        <Divider />
      </DetailsContent>
    </Actionsheet.Content>
  );
};

export default Details;
