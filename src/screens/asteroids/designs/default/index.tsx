import NoAsteroids from "./components/noAsteroids";
import Details from "./components/details";
import Explore from "./components/explore";
import Card from "./components/card";

import { useAsteroidsExplore } from "screens/asteroids/hooks/useAsteroidsExplore";
import { useAsteroidDetails } from "screens/asteroids/hooks/useAsteroidDetails";
import { useTimeInterval } from "../../hooks/useTimeInterval";
import { CardsView, Detail, DetailsView } from "./styled";
import { Actionsheet, Modal, VStack } from "native-base";
import { useAsteroids } from "../../hooks/useAsteroids";
import { TestKey } from "constants/keys/testKeys";
import { AsteroidData } from "../../interfaces";

const DefaultAsteroidsScreen = (): JSX.Element => {
  const { handleCloseAsteroidDetails, canDisplayAsteroidDetailsSheet } =
    useAsteroidDetails();
  const { startDateToDisplay, endDateToDisplay } = useTimeInterval();
  const { asteroidsData, areAsteroidsFound } = useAsteroids();
  const {
    handleCloseAsteroidsExploreWithoutSubmit,
    handleOpenAsteroidsExplore,
    canDisplayAsteroidsExplore,
  } = useAsteroidsExplore();

  return (
    <>
      <DetailsView testID={TestKey.Asteroids}>
        <Detail onPress={handleOpenAsteroidsExplore} fontSize="md" underline>
          Explore
        </Detail>
        <Detail fontSize="md">{`${startDateToDisplay} - ${endDateToDisplay}`}</Detail>
      </DetailsView>
      <CardsView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {areAsteroidsFound ? (
          <VStack space={4} alignItems="center">
            {asteroidsData.map((asteroidData: AsteroidData) => (
              <Card key={asteroidData.id} asteroidDetails={asteroidData} />
            ))}
          </VStack>
        ) : (
          <NoAsteroids />
        )}
      </CardsView>
      <Actionsheet
        isOpen={canDisplayAsteroidDetailsSheet}
        onClose={handleCloseAsteroidDetails}
      >
        <Details />
      </Actionsheet>
      <Modal
        onClose={handleCloseAsteroidsExploreWithoutSubmit}
        isOpen={canDisplayAsteroidsExplore}
        animationPreset="slide"
        size="xl"
      >
        {/* Required for calendars themes updates */}
        {canDisplayAsteroidsExplore ? <Explore /> : <></>}
      </Modal>
    </>
  );
};

export default DefaultAsteroidsScreen;
