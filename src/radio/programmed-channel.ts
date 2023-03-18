import { RadioChannelReference } from './channel-reference.js';
import { RadioChannel } from './channel.js';

export interface RadioSpecificChannelSettings {
  [setting: string]: number | string | boolean;
}

export interface RadioProgrammedChannel {
  id?: string;
  radioModelId: string;
  channelNumber: number;
  radioChannel: RadioChannel | RadioChannelReference;
  settings?: RadioSpecificChannelSettings;
}
