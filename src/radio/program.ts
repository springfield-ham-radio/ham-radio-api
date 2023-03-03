import { RadioProgrammedChannel } from './programmed-channel.js';

export interface RadioProgram<Settings> {
  settings: Settings;
  channels: RadioProgrammedChannel[];
}
