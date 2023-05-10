import { AnyAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const useFeatureExecuter = (): ((
  actionToExecute: AnyAction
) => void) => {
  const dispatch = useDispatch();

  const execute = (actionToExecute: AnyAction): void => {
    dispatch(actionToExecute);
  };

  return execute;
};
