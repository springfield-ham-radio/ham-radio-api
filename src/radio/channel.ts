import { Frequency } from '../branded-types/frequency.js';
import { RadioChannelId } from '../branded-types/radio-channel-id.js';
import type { RadioTone } from './tone.js';

export interface RadioChannel {
  id?: RadioChannelId;
  name?: string;
  transmitFrequency: Frequency;
  receiveFrequency: Frequency;
  transmitTone: RadioTone;
  receiveTone: RadioTone;
}
