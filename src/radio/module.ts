import { RadioDriver } from './driver';
import { RadioModel } from './model';
import { RadioSchema } from './schema';

export interface RadioModule {
  getId(): string;
  getModels(): RadioModel[];
  getSchema(modelId: string): Promise<RadioSchema>;
  getDriver(modelId: string): RadioDriver;
}
