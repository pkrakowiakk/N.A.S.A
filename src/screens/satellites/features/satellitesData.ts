import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Coordinates } from "interfaces/other/coordinates";
import { FeatureName } from "constants/keys/featureNames";
import { SatelliteData } from "../interfaces";

const defaultAmountOfFetchedSatellites: number = 20;
const initialSatellitesData: Array<SatelliteData> = new Array<SatelliteData>(
  defaultAmountOfFetchedSatellites
);

const satellitesDataFeature = createSlice({
  name: FeatureName.Satellites,
  initialState: initialSatellitesData,
  reducers: {
    setSatellitesData: (
      state: Array<SatelliteData>,
      action: PayloadAction<Array<SatelliteData>>
    ): Array<SatelliteData> => action.payload,
    updateSatellitesCoordinates: (
      state: Array<SatelliteData>,
      action: PayloadAction<Array<Coordinates>>
    ): Array<SatelliteData> => {
      const satellitesWithUpdatedCoordinates = state.map(
        (satellite: SatelliteData, index: number) => {
          return { ...satellite, coordinates: action.payload[index] };
        }
      );

      return satellitesWithUpdatedCoordinates;
    },
  },
});

export const { updateSatellitesCoordinates, setSatellitesData } =
  satellitesDataFeature.actions;

export default satellitesDataFeature.reducer;
