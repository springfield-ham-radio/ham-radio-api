import { RadioProgram } from './program.js';
import { RadioProgressIndicator } from './progress-indicator.js';

export interface RadioDriver {
  importFromRadio(path: string, progressIndicator: RadioProgressIndicator): Promise<RadioProgram | undefined>;
  programRadio(path: string, program: RadioProgram, progressIndicator: RadioProgressIndicator): Promise<void>;
}
