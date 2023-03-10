import { RadioTone } from './tone.js';

export interface RadioChannel {
  id?: string;
  name?: string;
  transmitFrequency: number;
  receiveFrequency: number;
  transmitTone?: RadioTone;
  receiveTone?: RadioTone;
}
