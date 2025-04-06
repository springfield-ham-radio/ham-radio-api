import { RadioModelId } from '../branded-types/radio-model-id.js';
import { RadioModuleId } from '../branded-types/radio-module-id.js';

export interface RadioModel {
  id: RadioModelId;
  module: RadioModuleId;
  name: string;
  manufacturer: string;
}
