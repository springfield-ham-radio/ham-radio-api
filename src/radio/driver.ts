import type { RadioMemory } from "./memory.js";
import type { RadioProgressIndicator } from "./progress-indicator.js";

export interface RadioDriver {
  readRadio(serialPortPath: string, progressIndicator: RadioProgressIndicator): Promise<RadioMemory>;
  writeRadio(serialPortPath: string, memory: RadioMemory, progressIndicator: RadioProgressIndicator): Promise<void>;
}
