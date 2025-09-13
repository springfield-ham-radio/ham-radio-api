import type { RadioMemorySegment } from './memory-segment.js';

export interface RadioMemoryConfig {
  chunkSize: number;
  addressSize: number;
  segments: {
    [segmentName: string]: RadioMemorySegment;
  };
}
