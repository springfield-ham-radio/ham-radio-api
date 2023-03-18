import { RadioMemory } from './memory.js';
import { RadioProgram } from './program.js';
import { RadioProgressIndicator } from './progress-indicator.js';

export interface RadioDriver {
  readRadio(serialPortPath: string, progressIndicator: RadioProgressIndicator): Promise<RadioMemory | undefined>;
  writeRadio(serialPortPath: string, memory: RadioMemory, progressIndicator: RadioProgressIndicator): Promise<void>;

  decodeMemory(memory: RadioMemory): RadioProgram;
  encodeProgram(program: RadioProgram, memory: RadioMemory): RadioMemory;
}
