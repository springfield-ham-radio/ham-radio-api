import { RadioDriver } from './driver.js';
import { RadioManufacturer } from './manufacturer.js';

export interface RadioModule {
  getManufacturer(): RadioManufacturer;
  getDriver(modelName: string): RadioDriver;
}
