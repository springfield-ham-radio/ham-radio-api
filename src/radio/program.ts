import { RadioId } from '../branded-types/radio-id.js';
import { RadioProgrammedChannel } from './programmed-channel.js';
import { RadioSettings } from './settings.js';

export interface RadioProgram {
  radio: RadioId;
  settings: RadioSettings;
  channels: RadioProgrammedChannel[];
}
