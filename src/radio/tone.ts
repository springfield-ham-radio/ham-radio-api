import { CTCSS } from './ctcss.js';
import { DCS } from './dcs.js';

export enum RadioToneType {
  CTCSS,
  DCS,
}

export interface RadioTone {
  tone: CTCSS | DCS;
  type: RadioToneType;
}
