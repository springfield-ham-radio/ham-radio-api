import type { CTCSS } from './ctcss.js';
import type { DCS } from './dcs.js';

export enum RadioToneType {
  CTCSS,
  DCS,
}

export interface RadioTone {
  tone: CTCSS | DCS;
  type: RadioToneType;
}
