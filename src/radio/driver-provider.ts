import { RadioModelId } from '../branded-types/radio-model-id.js';
import { RadioModuleId } from '../branded-types/radio-module-id.js';
import { RadioDriver } from './driver.js';

export interface RadioDriverProvider {
  getId(): RadioModuleId;
  getDriver(model: RadioModelId): RadioDriver;
}
