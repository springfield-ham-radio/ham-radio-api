import { RadioChannelReference } from './radio-channel-reference.js';
import { RadioChannel } from './radio-channel.js';

export interface RadioProgrammedChannel {
  channelNumber: number;
  transmitPower: number;
  radioChannel: RadioChannel | RadioChannelReference;
}
