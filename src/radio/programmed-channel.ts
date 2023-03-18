import { RadioChannel } from './channel.js';
import { RadioSettings } from './settings.js';

export interface RadioProgrammedChannel {
  channelNumber: number;
  radioChannel: RadioChannel | string;
  settings?: RadioSettings;
}
