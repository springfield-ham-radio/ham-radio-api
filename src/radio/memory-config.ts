import type { RadioMemorySegment } from './memory-segment.js';

export interface RadioMemoryConfig {
  chunkSize: number;
  addressSize: number;
  addressEndianness: 'big' | 'little';
  segments: {
    [segmentName: string]: RadioMemorySegment;
  };
}
