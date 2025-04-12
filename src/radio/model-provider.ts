import { RadioModuleId } from '../branded-types/radio-module-id.js';
import { RadioModel } from './model.js';

export interface RadioModelProvider {
  getId(): RadioModuleId;
  getModels(): RadioModel[];
}
