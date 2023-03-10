export enum RadioToneType {
  CTCSS,
  DCS,
}

export interface RadioTone {
  tone: number;
  type: RadioToneType;
}
