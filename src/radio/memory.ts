import { RadioModelId } from '../branded-types/radio-model-id.js';
import type { RadioMemorySegment } from './memory-segment.js';

export interface RadioMemory {
  radioModel: RadioModelId;
  contents: RadioMemorySegment[];
}
