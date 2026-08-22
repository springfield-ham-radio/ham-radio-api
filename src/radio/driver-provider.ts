import type { RadioDriver } from "./driver.js";
import type { RadioModelId } from "../branded-types/radio-model-id.js";
import type { RadioModuleId } from "../branded-types/radio-module-id.js";

export interface RadioDriverProvider {
  getId(): RadioModuleId;
  getDriver(model: RadioModelId): RadioDriver;
}
