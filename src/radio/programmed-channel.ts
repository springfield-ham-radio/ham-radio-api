import type { RadioChannel } from "./channel.js";
import type { RadioSettings } from "./settings.js";

export interface RadioProgrammedChannel {
  channelNumber: number;
  radioChannel: RadioChannel | string;
  settings?: RadioSettings;
}
