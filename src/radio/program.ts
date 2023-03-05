import { RadioProgrammedChannel } from './programmed-channel.js';
import { RadioSettings } from './settings.js';

export interface RadioProgram {
  settings: RadioSettings;
  channels: RadioProgrammedChannel[];
}
