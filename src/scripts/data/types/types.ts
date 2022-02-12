export interface IConstants {
  size: number;
  colors: string[];
}

export interface ICanPress {
  canPressLeft: boolean;
  canPressRight: boolean;
  canPressUp: boolean;
  canPressDown: boolean;
}

export interface ITime {
  interval: number;
  milliSeconds: number;
  seconds: number;
  minutes: number;
}
