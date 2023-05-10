import { DateFormatterService } from "interfaces/services/date/dateFormatterService";
import { AsteroidsService } from "interfaces/services/nasa/asteroidsService";
import { NasaKeyService } from "interfaces/services/nasa/keyService";
import { DateService } from "interfaces/services/date/dateService";
import { HttpService } from "interfaces/services/other/httpService";
import { Response } from "interfaces/responses/response";
import {
  EstimatedDiameterResponse,
  RelativeVelocityResponse,
} from "interfaces/responses/asteroids";
import {
  AsteroidResponseDetails,
  MissDistanceResponse,
  AsteroidsResponse,
} from "interfaces/responses/asteroids";
import {
  AsteroidEstimatedDiameters,
  AsteroidRelativeVelocity,
  AsteroidMissDistance,
  AsteroidData,
} from "screens/asteroids/interfaces";

export class AsteroidsServiceImplementation implements AsteroidsService {
  private readonly dateFormatterService: DateFormatterService;
  private readonly nasaKeyService: NasaKeyService;
  private readonly httpService: HttpService;
  private readonly dateService: DateService;

  constructor(
    dateFormatterService: DateFormatterService,
    nasaKeyService: NasaKeyService,
    httpService: HttpService,
    dateService: DateService
  ) {
    this.dateFormatterService = dateFormatterService;
    this.nasaKeyService = nasaKeyService;
    this.httpService = httpService;
    this.dateService = dateService;
  }

  getAsteroidsData(
    startDate: string,
    endDate: string
  ): Promise<Response<AsteroidsResponse>> {
    const nasaKey = this.nasaKeyService.getKey();
    return this.httpService.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${nasaKey}`
    );
  }

  mapAsteroidsDataResponse(
    asteroidsDataResponse: { [key: string]: Array<AsteroidResponseDetails> },
    intervalStartDate: string,
    intervalEndDate: string
  ): Array<AsteroidData> {
    const keys = this.resolveKeys(intervalStartDate, intervalEndDate);

    const asteroidsMap = this.getAsteroidsMap(asteroidsDataResponse, keys);
    return Array.from(asteroidsMap.values());
  }

  private resolveKeys(
    intervalStartDate: string,
    intervalEndDate: string
  ): Array<string> {
    const dates: Array<string> = new Array<string>();

    const startDate: Date =
      this.dateFormatterService.formatDateStringToDate(intervalStartDate);
    const endDate: Date =
      this.dateFormatterService.formatDateStringToDate(intervalEndDate);

    let date: Date = startDate;
    while (date <= endDate) {
      dates.push(
        this.dateFormatterService.formatToQueryParameter(new Date(date))
      );
      date = this.dateService.getTomorrow(date);
    }

    return dates;
  }

  private getAsteroidsMap(
    asteroidsDataResponse: { [key: string]: Array<AsteroidResponseDetails> },
    keys: Array<string>
  ) {
    const asteroidsDataMap = new Map<string, AsteroidData>();

    for (const key of keys) {
      const asteroidsData = asteroidsDataResponse[key].map(
        (response: AsteroidResponseDetails) => this.mapToAsteroidData(response)
      );

      asteroidsData.map(
        (asteroid: AsteroidData): Map<string, AsteroidData> =>
          asteroidsDataMap.set(asteroid.id, asteroid)
      );
    }
    return asteroidsDataMap;
  }

  private mapToAsteroidData(
    asteroidDetails: AsteroidResponseDetails
  ): AsteroidData {
    return {
      isPotentiallyHazardous: asteroidDetails.is_potentially_hazardous_asteroid,
      orbitingBody: asteroidDetails.close_approach_data[0].orbiting_body,
      missDistance: this.mapMissingDistance(
        asteroidDetails.close_approach_data[0].miss_distance
      ),
      closestApproachDate:
        asteroidDetails.close_approach_data[0].close_approach_date_full,
      relativeVelocity: this.mapRelativeVelocity(
        asteroidDetails.close_approach_data[0].relative_velocity
      ),
      estimatedDiameters: this.mapEstimatedDiameter(
        asteroidDetails.estimated_diameter
      ),
      magnitude: asteroidDetails.absolute_magnitude_h,
      nasaUrl: asteroidDetails.nasa_jpl_url,
      name: asteroidDetails.name,
      id: asteroidDetails.id,
    };
  }

  private mapMissingDistance(
    missDistance: MissDistanceResponse
  ): AsteroidMissDistance {
    return {
      astronomicalMissDistance: Number(missDistance.astronomical).toPrecision(
        2
      ),
      missDistanceInKilometers: Number(missDistance.kilometers).toFixed(0),
      lunarMissDistance: Number(missDistance.lunar).toPrecision(2),
      missDistanceInMiles: Number(missDistance.miles).toFixed(0),
    };
  }

  private mapRelativeVelocity(
    relativeVelocity: RelativeVelocityResponse
  ): AsteroidRelativeVelocity {
    return {
      velocityMilesPerHour: Number(relativeVelocity.miles_per_hour).toFixed(0),
      velocityKilometersPerSecond: Number(
        relativeVelocity.kilometers_per_second
      ).toFixed(0),
      velocityKilometersPerHour: Number(
        relativeVelocity.kilometers_per_hour
      ).toFixed(0),
    };
  }

  private mapEstimatedDiameter(
    estimatedDiameter: EstimatedDiameterResponse
  ): AsteroidEstimatedDiameters {
    return {
      kilometers: {
        minDiameter: Number(
          estimatedDiameter.kilometers.estimated_diameter_max.toFixed(2)
        ),
        maxDiameter: Number(
          estimatedDiameter.kilometers.estimated_diameter_min.toFixed(2)
        ),
      },
      meters: {
        minDiameter: Number(
          estimatedDiameter.meters.estimated_diameter_max.toFixed(2)
        ),
        maxDiameter: Number(
          estimatedDiameter.meters.estimated_diameter_min.toFixed(2)
        ),
      },
      miles: {
        minDiameter: Number(
          estimatedDiameter.miles.estimated_diameter_max.toFixed(2)
        ),
        maxDiameter: Number(
          estimatedDiameter.miles.estimated_diameter_min.toFixed(2)
        ),
      },
      feet: {
        minDiameter: Number(
          estimatedDiameter.feet.estimated_diameter_max.toFixed(2)
        ),
        maxDiameter: Number(
          estimatedDiameter.feet.estimated_diameter_min.toFixed(2)
        ),
      },
    };
  }
}
