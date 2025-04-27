import { RadioModuleId } from '../branded-types/radio-module-id.js';
import { Radio } from './radio.js';

export interface RadioModule {
  getId(): RadioModuleId;
  getRadios(): Radio[];
}
