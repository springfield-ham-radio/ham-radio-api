import { RadioChannelReference } from './channel-reference.js';
import { RadioChannel } from './channel.js';

export interface RadioProgrammedChannel {
  id?: string;
  channelNumber: number;
  transmitPower: number;
  radioChannel: RadioChannel | RadioChannelReference;
}
