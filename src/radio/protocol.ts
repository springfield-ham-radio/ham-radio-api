import type { RadioMemorySegment } from "./memory-segment.js";

/**
 * A byte in a send or expect array.
 *
 * - number 0–255: literal byte
 * - hex string such as `"0x50"`: literal byte
 * - single-character string such as `"S"`: ASCII opcode
 * - placeholder: `"$address"`, `"$block"`, `"$chunkSize"`, `"$length"`, `"$data"`
 */
export type RadioByteToken = number | string;

/**
 * Receive any content of a fixed length, such as a radio identifier.
 */
export interface RadioExpectBytes {
  bytes: number;
}

/**
 * Read until a delimiter byte. Used for Kenwood live CAT lines ending in CR.
 */
export interface RadioExpectUntil {
  until: RadioByteToken;
}

/**
 * Expected serial reply for an exchange.
 *
 * - token: exact 1-byte match (ACK)
 * - token array: exact multi-byte match, or a framed reply with `$` placeholders
 * - `{ bytes: N }`: any N bytes
 * - `{ until: token }`: variable-length reply ending at the delimiter (the delimiter is not included)
 */
export type RadioExpect = RadioByteToken | RadioByteToken[] | RadioExpectBytes | RadioExpectUntil;

/**
 * Packer that converts live CAT replies into a logical memory-map record.
 * `kenwood-th-f6` parses `MR`/`MNA` CSV into the 32-byte TH-F6 channel image.
 */
export type RadioCatPack = "kenwood-th-f6";

/**
 * Live CAT memory loop: one logical record per channel index, not clone blocks.
 */
export interface RadioCatMemoryConfig {
  segment: string;
  count: number;
  recordSize: number;
  pack: RadioCatPack;
  indexWidth?: number;
  emptyByte?: number;
  timeout?: number;
  interCommandDelayMs?: number;
}

/**
 * One serial exchange: send bytes and/or wait for a reply, and/or change baud.
 * At least one of `send`, `expect`, or `setBaudRate` must be present.
 */
export interface RadioExchange {
  description?: string;
  send?: RadioByteToken[];
  expect?: RadioExpect;
  timeout?: number;
  /**
   * Milliseconds to wait after send (Kenwood CAT wake CR before ID).
   */
  delay?: number;
  /**
   * Switch the serial baud rate before send/expect. TH-D74 clone mode
   * enters programming at 9600 then transfers at 57600.
   */
  setBaudRate?: number;
}

/**
 * Chunked memory read: repeat an exchange across named segments.
 * `$data` in `expect` is captured into the memory buffer.
 * Optional `ack` is a second exchange after each chunk (for example an ACK).
 * Optional `delay` is milliseconds to wait after each accepted chunk (Kenwood
 * TM-D710A clone at 57600 needs this so the next `R` does not outrun the radio).
 * Optional `ready` is a byte prefixed to the next chunk when `ack.expect` times out.
 * UV-5R firmware that replies `06` to the host ACK stays on the plain frame.
 * Firmware that stays silent prefixes the next `X` block with `06`. A short
 * `ack.timeout` (50ms) turns that silence into a timeout before the radio
 * answers `FE`.
 */
export interface RadioReadStep {
  description?: string;
  read: {
    segments: string[];
    send: RadioByteToken[];
    expect: RadioExpect;
    ack?: RadioExchange;
    timeout?: number;
    delay?: number;
    ready?: RadioByteToken;
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

/**
 * Read memories with live CAT commands (Kenwood TH-F6 `MR`/`MNA`).
 */
export interface RadioCatReadStep {
  description?: string;
  catRead: RadioCatMemoryConfig;
}

/**
 * Write memories with live CAT commands (Kenwood TH-F6 `MW`/`MNA`).
 */
export interface RadioCatWriteStep {
  description?: string;
  catWrite: RadioCatMemoryConfig;
}

export type RadioProtocolStep = RadioExchange | RadioReadStep | RadioWriteStep | RadioCatReadStep | RadioCatWriteStep;
