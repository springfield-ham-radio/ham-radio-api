import type { RadioId } from './id.js';

export interface RadioConnection {
  serialPortPath: string;
  radio: RadioId;
}
