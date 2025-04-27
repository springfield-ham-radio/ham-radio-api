import { RadioModelId } from '../branded-types/radio-model-id.js';
import { RadioModuleId } from '../branded-types/radio-module-id.js';

export interface RadioId {
  module: RadioModuleId;
  model: RadioModelId;
  name: string;
  manufacturer: string;
}
