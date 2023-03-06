import { RadioManufacturer } from './manufacturer';
import { RadioDriver } from './driver';
import { RadioModel } from './model';

export interface RadioModule {
  getManufacturer(): RadioManufacturer;
  getModels(filter?: string[]): RadioModel[];
  getDriver(modelName: string): RadioDriver;
}
