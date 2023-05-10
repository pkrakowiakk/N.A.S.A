export interface AsteroidsResponse {
  near_earth_objects: { [key: string]: Array<AsteroidResponseDetails> };
  links: { [key: string]: string };
  element_count: number;
}

export interface AsteroidResponseDetails {
  close_approach_data: Array<CloseApproachDataResponse>;
  estimated_diameter: EstimatedDiameterResponse;
  is_potentially_hazardous_asteroid: boolean;
  absolute_magnitude_h: number;
  orbital_data: OrbitalData;
  is_sentry_object: boolean;
  neo_reference_id: string;
  nasa_jpl_url: string;
  designation: string;
  name: string;
  links: Links;
  id: string;
}

export interface CloseApproachDataResponse {
  relative_velocity: RelativeVelocityResponse;
  miss_distance: MissDistanceResponse;
  epoch_date_close_approach: number;
  close_approach_date_full: string;
  close_approach_date: Date;
  orbiting_body: string;
}

export interface MissDistanceResponse {
  astronomical: string;
  kilometers: string;
  lunar: string;
  miles: string;
}

export interface RelativeVelocityResponse {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

export interface EstimatedDiameterResponse {
  kilometers: DiameterMinMaxResponse;
  meters: DiameterMinMaxResponse;
  miles: DiameterMinMaxResponse;
  feet: DiameterMinMaxResponse;
}

export interface DiameterMinMaxResponse {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Links {
  self: string;
}

export interface OrbitalData {
  jupiter_tisserand_invariant: string;
  minimum_orbit_intersection: string;
  ascending_node_longitude: string;
  orbit_determination_date: Date;
  first_observation_date: Date;
  last_observation_date: Date;
  perihelion_distance: string;
  perihelion_argument: string;
  observations_used: number;
  orbit_uncertainty: string;
  aphelion_distance: string;
  data_arc_in_days: number;
  epoch_osculation: string;
  semi_major_axis: string;
  perihelion_time: string;
  orbit_class: OrbitClass;
  orbital_period: string;
  mean_anomaly: string;
  eccentricity: string;
  inclination: string;
  mean_motion: string;
  orbit_id: string;
  equinox: string;
}

export interface OrbitClass {
  orbit_class_description: string;
  orbit_class_range: string;
  orbit_class_type: string;
}
