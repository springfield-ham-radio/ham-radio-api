import type { Radio } from "./radio.js";
import type { RadioModuleId } from "../branded-types/radio-module-id.js";

export interface RadioModule {
  getId(): RadioModuleId;
  getRadios(): Radio[];
}
