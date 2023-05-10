import { useFeatureExecuter } from "./useFeatureExecutor";
import { UseModal } from "../interfaces/hooks/useModal";
import { useFeature } from "./useFeature";
import { Features } from "types/features";
import {
  hideExploreAsteroidsModal,
  showExploreAsteroidsModal,
  hideAboutModal,
  showAboutModal,
} from "./features/modal";

export const useModal = (): UseModal => {
  const canDisplayModal = useFeature(
    (features: Features) => features.canDisplayModal
  );
  const execute = useFeatureExecuter();

  const handleCloseExploreAsteroidsModal = (): void => {
    execute(hideExploreAsteroidsModal());
  };

  const handleOpenExploreAsteroidsModal = (): void => {
    execute(showExploreAsteroidsModal());
  };

  const handleCloseAboutModal = (): void => {
    execute(hideAboutModal());
  };

  const handleOpenAboutModal = (): void => {
    execute(showAboutModal());
  };

  return {
    canDisplayExploreAsteroidsModal: canDisplayModal.exploreAsteroids,
    canDisplayAboutModal: canDisplayModal.about,
    handleCloseExploreAsteroidsModal,
    handleOpenExploreAsteroidsModal,
    handleCloseAboutModal,
    handleOpenAboutModal,
  };
};
