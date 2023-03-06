import { RadioManufacturer } from './manufacturer';
import { RadioDriver } from './driver';
export interface RadioModule {
  getManufacturer(): RadioManufacturer;
  getDriver(modelName: string): RadioDriver;
}
