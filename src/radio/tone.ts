import type { CTCSS } from './ctcss.js';
import type { DCS } from './dcs.js';

export enum RadioToneType {
  CTCSS = 0,
  DCS = 1,
}

export interface RadioTone {
  tone: CTCSS | DCS;
  type: RadioToneType;
}
