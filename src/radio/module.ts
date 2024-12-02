import { RadioDriver } from './driver.js';
import { RadioModel } from './model.js';
import { RadioSchema } from './schema.js';

export interface RadioModule {
  getId(): string;
  getModels(): RadioModel[];
  getSchema(modelId: string): Promise<RadioSchema>;
  getDriver(modelId: string): RadioDriver;
}
