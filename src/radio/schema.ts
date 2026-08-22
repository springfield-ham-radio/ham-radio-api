import type { RadioModelId } from "../branded-types/radio-model-id.js";

export interface RadioSchema {
  model: RadioModelId;
  settingsSchema: unknown;
  channelSchema: unknown;
}
