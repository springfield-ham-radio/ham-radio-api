import { RadioId } from '../branded-types/radio-id.js';
import { RadioModelId } from '../branded-types/radio-model-id.js';

export interface Radio {
  id: RadioId;
  name: string;
  model: RadioModelId;
}
