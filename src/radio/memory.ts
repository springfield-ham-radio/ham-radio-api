import type { RadioModelId } from '../branded-types/radio-model-id.js';

export interface RadioMemory {
  radioModel: RadioModelId;
  contents: Uint8Array;
}
