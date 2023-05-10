import { setEndDate, setStartDate } from "../features/timeInterval";
import { useFeatureExecuter } from "hooks/useFeatureExecutor";
import { UseAsteroidsExplore } from "../interfaces";
import { useFeature } from "hooks/useFeature";
import { useModal } from "hooks/useModal";
import { Features } from "types/features";
import {
  setBackupStartDate,
  setBackupEndDate,
} from "../features/timeIntervalBackup";

export const useAsteroidsExplore = (): UseAsteroidsExplore => {
  const asteroidsBackupTimeInterval = useFeature(
    (features: Features) => features.asteroidsTimeIntervalBackup
  );
  const asteroidsTimeInterval = useFeature(
    (features: Features) => features.asteroidsTimeInterval
  );

  const {
    handleCloseExploreAsteroidsModal,
    canDisplayExploreAsteroidsModal,
    handleOpenExploreAsteroidsModal,
  } = useModal();

  const execute = useFeatureExecuter();

  const handleOpenAsteroidsExplore = (): void => {
    execute(setBackupStartDate(asteroidsTimeInterval.startDate));
    execute(setBackupEndDate(asteroidsTimeInterval.endDate));
    handleOpenExploreAsteroidsModal();
  };

  const handleCloseAsteroidsExplore = (): void => {
    handleCloseExploreAsteroidsModal();
  };

  const handleCloseAsteroidsExploreWithoutSubmit = (): void => {
    handleCloseExploreAsteroidsModal();
    execute(setStartDate(asteroidsBackupTimeInterval.startDate));
    execute(setEndDate(asteroidsBackupTimeInterval.endDate));
  };

  return {
    canDisplayAsteroidsExplore: canDisplayExploreAsteroidsModal,
    handleCloseAsteroidsExploreWithoutSubmit,
    handleCloseAsteroidsExplore,
    handleOpenAsteroidsExplore,
  };
};
