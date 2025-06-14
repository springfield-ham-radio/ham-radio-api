import type { RadioMemorySegment } from './memory-segment.js';

export interface RadioMemoryConfig {
  chunkSize: number;
  segments: RadioMemorySegment[];
}
