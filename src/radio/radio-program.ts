import { RadioProgrammedChannel } from './radio-programmed-channel.js';

export interface RadioProgram<Settings> {
  settings: Settings;
  channels: RadioProgrammedChannel[];
}
