export interface RadioMemorySegment {
  /** Inclusive end of the segment (a range 0–6143 is 6144 bytes). */
  endAddress: number;
  startAddress: number;
}
