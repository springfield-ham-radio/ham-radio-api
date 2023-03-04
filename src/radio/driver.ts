import { RadioProgram } from './program.js';
import { RadioProgressIndicator } from './progress-indicator.js';

export interface RadioDriver<Settings> {
  importFromRadio(path: string, progressIndicator: RadioProgressIndicator): Promise<RadioProgram<Settings> | undefined>;
  programRadio(path: string, program: RadioProgram<Settings>, progressIndicator: RadioProgressIndicator): Promise<void>;
}
