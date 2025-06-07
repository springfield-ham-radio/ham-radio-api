import { RadioModuleId } from '../branded-types/radio-module-id.js';
import type { Radio } from './radio.js';

export interface RadioModule {
  getId(): RadioModuleId;
  getRadios(): Radio[];
}
