import { RadioProgrammedChannel } from './programmed-channel.js';
import { RadioSettings } from './settings.js';

export interface RadioProgram {
  radioId?: string;
  settings: RadioSettings;
  channels: RadioProgrammedChannel[];
}
