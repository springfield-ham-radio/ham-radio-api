import { RadioMemory } from './memory.js';
import { RadioProgressIndicator } from './progress-indicator.js';

export interface RadioDriver {
  readRadio(serialPortPath: string, progressIndicator: RadioProgressIndicator): Promise<RadioMemory | undefined>;
  writeRadio(serialPortPath: string, memory: RadioMemory, progressIndicator: RadioProgressIndicator): Promise<void>;
}
