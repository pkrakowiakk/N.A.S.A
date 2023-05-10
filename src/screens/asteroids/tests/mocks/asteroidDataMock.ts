import { AsteroidData } from "screens/asteroids/interfaces";

export const mockAsteroidData: AsteroidData = {
  estimatedDiameters: {
    kilometers: {
      minDiameter: 0,
      maxDiameter: 0,
    },
    meters: {
      minDiameter: 0,
      maxDiameter: 0,
    },
    miles: {
      minDiameter: 0,
      maxDiameter: 0,
    },
    feet: {
      minDiameter: 0,
      maxDiameter: 0,
    },
  },
  relativeVelocity: {
    velocityKilometersPerSecond: "",
    velocityKilometersPerHour: "",
    velocityMilesPerHour: "",
  },
  missDistance: {
    astronomicalMissDistance: "",
    missDistanceInKilometers: "",
    missDistanceInMiles: "",
    lunarMissDistance: "",
  },
  isPotentiallyHazardous: false,
  closestApproachDate: "",
  orbitingBody: "",
  magnitude: 0,
  nasaUrl: "",
  name: "",
  id: "",
};
