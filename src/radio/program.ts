import type { RadioProgrammedChannel } from './programmed-channel.js';
import type { RadioSettings } from './settings.js';

export interface RadioProgram {
  settings: RadioSettings;
  channels: RadioProgrammedChannel[];
}
