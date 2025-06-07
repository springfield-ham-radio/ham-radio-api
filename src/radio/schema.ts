import type { RadioModelId } from '../branded-types/radio-model-id.js';

export interface RadioSchema {
  model: RadioModelId;
  settingsSchema: any;
  channelSchema: any;
}
