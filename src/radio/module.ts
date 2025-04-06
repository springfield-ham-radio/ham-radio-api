import { RadioModelId } from '../branded-types/radio-model-id.js';
import { RadioModuleId } from '../branded-types/radio-module-id.js';
import { RadioDriver } from './driver.js';
import { RadioModel } from './model.js';
import { RadioSchema } from './schema.js';

export interface RadioModule {
  getId(): RadioModuleId;
  getModels(): RadioModel[];
  getSchema(model: RadioModelId): Promise<RadioSchema>;
  getDriver(model: RadioModelId): RadioDriver;
}
