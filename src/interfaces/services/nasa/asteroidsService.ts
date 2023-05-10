import { AsteroidData } from "screens/asteroids/interfaces";
import { Response } from "interfaces/responses/response";
import {
  AsteroidResponseDetails,
  AsteroidsResponse,
} from "interfaces/responses/asteroids";

export interface AsteroidsService {
  getAsteroidsData: (
    startDate: string,
    endDate: string
  ) => Promise<Response<AsteroidsResponse>>;
  mapAsteroidsDataResponse: (
    asteroidsDataResponse: { [key: string]: Array<AsteroidResponseDetails> },
    intervalStartDate: string,
    intervalEndDate: string
  ) => Array<AsteroidData>;
}
