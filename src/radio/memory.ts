import type { RadioMemorySegment } from './memory-segment.js';
import type { RadioModelId } from '../branded-types/radio-model-id.js';

export interface RadioMemory {
  radioModel: RadioModelId;
  contents: RadioMemorySegment[];
}
