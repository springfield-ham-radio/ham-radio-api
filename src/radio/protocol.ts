import type { RadioMemorySegment } from "./memory-segment.js";

/**
 * A byte in a send or expect array.
 *
 * - number 0–255: literal byte
 * - hex string such as `"0x50"`: literal byte
 * - single-character string such as `"S"`: ASCII opcode
 * - placeholder: `"$address"`, `"$chunkSize"`, `"$length"`, `"$data"`
 */
export type RadioByteToken = number | string;

/**
 * Receive any content of a fixed length, such as a radio identifier.
 */
export interface RadioExpectBytes {
  bytes: number;
}

/**
 * Expected serial reply for an exchange.
 *
 * - token: exact 1-byte match (ACK)
 * - token array: exact multi-byte match, or a framed reply with `$` placeholders
 * - `{ bytes: N }`: any N bytes
 */
export type RadioExpect = RadioByteToken | RadioByteToken[] | RadioExpectBytes;

/**
 * One serial exchange: send bytes and/or wait for a reply.
 * At least one of `send` or `expect` must be present.
 */
export type RadioExchange =
  | {
      description?: string;
      send: RadioByteToken[];
      expect?: RadioExpect;
      timeout?: number;
    }
  | {
      description?: string;
      send?: RadioByteToken[];
      expect: RadioExpect;
      timeout?: number;
    };

/**
 * Chunked memory read: repeat an exchange across named segments.
 * `$data` in `expect` is captured into the memory buffer.
 * Optional `ack` is a second exchange after each chunk (for example an ACK).
 */
export interface RadioReadStep {
  description?: string;
  read: {
    segments: string[];
    send: RadioByteToken[];
    expect: RadioExpect;
    ack?: RadioExchange;
    timeout?: number;
  };
}

/**
 * Chunked memory write: repeat an exchange across named segments.
 * `$data` in `send` emits the current chunk from the memory buffer.
 *
 * Optional `chunkSize` overrides `memoryConfig.chunkSize` (UV-5R clone writes 16-byte blocks).
 * Optional `delay` is milliseconds to wait after each accepted block (UV-5R clone waits 50ms).
 * Optional `skip` lists inclusive radio-address ranges that must not be uploaded.
 */
export interface RadioWriteStep {
  description?: string;
  write: {
    segments: string[];
    send: RadioByteToken[];
    expect: RadioExpect;
    timeout?: number;
    chunkSize?: number;
    delay?: number;
    skip?: RadioMemorySegment[];
  };
}

export type RadioProtocolStep = RadioExchange | RadioReadStep | RadioWriteStep;
