export enum DistanceUnit {
  lunar = "lunar",
  kilometers = "kilometers"
}

export interface IAppContext {
  distanceType: DistanceUnit;
  setDistanceType: (unit: DistanceUnit) => void;
}

