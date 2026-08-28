/**
 * JSON memory-map DSL: describes how radio EEPROM bytes map to settings
 * without a radio-specific TypeScript decoder.
 *
 * Addresses are radio EEPROM addresses (not Chirp image offsets).
 */

/** Scalar JSON values stored in decoded settings. */
export type RadioSettingScalar = string | number | boolean | null;

/** Nested settings object produced by decode / consumed by encode. */
export type RadioSettingValue = RadioSettingScalar | RadioSettingValue[] | { [key: string]: RadioSettingValue };

/** UI widget hint for schema-driven forms. */
export type RadioMemoryMapWidget = "integer" | "select" | "switch" | "text" | "number";

/**
 * Decoded tone value for UV-5R-style tone words (before RadioTone binding).
 */
export type RadioMemoryMapToneValue =
  | { mode: "none" }
  | { mode: "ctcss"; value: number }
  | { mode: "dcs"; code: number; polarity: "N" | "R" };

/** How a field's raw bits/bytes become a setting value. */
export type RadioMemoryMapValueKind =
  | { kind: "integer"; min?: number; max?: number }
  | { kind: "boolean" }
  | { kind: "enum"; values: string[] }
  | {
      kind: "ascii";
      length: number;
      /** Fill byte for unused character slots (default 0xFF). Kenwood names use 0. */
      pad?: number;
    }
  | {
      kind: "digits";
      /** Number of decimal digit bytes. */
      length: number;
      /**
       * Scale applied after parsing digits as a decimal integer.
       * VFO frequency uses 10 (Hz/10 stored as 8 digits).
       * Offset uses 1000 (kHz stored as 6 digits → Hz).
       */
      scale?: number;
    }
  | {
      kind: "dtmf";
      length: number;
      /** Character set indexed by byte value; 0xFF terminates. */
      charset?: string;
    }
  | {
      kind: "bbcd";
      /** Number of packed BCD bytes (Chirp bbcd). */
      length: number;
    }
  | {
      /**
       * Chirp lbcd: little-endian integer whose hex digits are the decimal
       * frequency digits (Hz / scale). UV-5R channel freqs use length 4, scale 10.
       */
      kind: "lbcd";
      length: number;
      /** Multiplier after interpreting hex-as-decimal (default 10 → Hz). */
      scale?: number;
    }
  | {
      /**
       * UV-5R-style tone word (typically ul16):
       * - 0 / 0xFFFF → none
       * - >= ctcssMin → CTCSS (raw = Hz * 10)
       * - else DCS index into `values` (1-based); reverseOffset adds R polarity
       */
      kind: "tone";
      /** Ordered DCS codes (Chirp UV5R_DTCS). */
      values: number[];
      /** Minimum raw value treated as CTCSS (Chirp uses 0x0258). */
      ctcssMin?: number;
      /** Added to DCS index for reverse polarity (Chirp uses 0x69). */
      reverseOffset?: number;
    }
  | {
      /**
       * CTCSS tone stored as an index into `values` (Hz * 10, Springfield tenths).
       * Kenwood TH-D74 `rtone` / `ctone` use Chirp TONES order.
       */
      kind: "ctcss-index";
      values: number[];
    }
  | {
      /**
       * DCS code stored as an index into `values`.
       * Kenwood TH-D74 `dtcs_code` uses Chirp DTCS_CODES order.
       */
      kind: "dcs-index";
      values: number[];
    };

/** UI metadata for a non-reserved field. */
export interface RadioMemoryMapFieldUi {
  group: string;
  label: string;
  widget: RadioMemoryMapWidget;
  description?: string;
  /** Defaults to true. Set false for firmware / read-only messages. */
  writable?: boolean;
}

/**
 * One field in a sequential struct.
 * Bitfields pack into the current byte MSB-first (Chirp-style).
 */
export interface RadioMemoryMapField {
  id: string;
  /**
   * Storage type:
   * - u8 / u16 / u32: whole bytes (u16/u32 are little-endian, Chirp ul16/ul32)
   * - bits: bitfield of `width` bits within the current byte (MSB-first)
   * - char: ASCII byte (length via value.kind ascii or count)
   */
  type: "u8" | "u16" | "u32" | "bits" | "char";
  /** Bit width when type is bits. */
  width?: number;
  /** When true, skip decode/encode for this padding field. */
  reserved?: boolean;
  value?: RadioMemoryMapValueKind;
  ui?: RadioMemoryMapFieldUi;
}

/**
 * When the first byte of a repeated struct instance equals `equals`,
 * the slot is treated as empty (Chirp: RX freq first byte 0xFF).
 */
export interface RadioMemoryMapEmptyWhen {
  equals: number;
}

/**
 * A named struct at a radio EEPROM seek address.
 * Fields are laid out sequentially from `seek`.
 */
export interface RadioMemoryMapStruct {
  id: string;
  /** Radio EEPROM start address (number or hex string such as "0x0E20"). */
  seek: number | string;
  fields: RadioMemoryMapField[];
  /**
   * Repeat this struct `count` times with `stride` bytes between entries.
   * Used for channel tables and PTT-ID code tables.
   */
  count?: number;
  stride?: number;
  /**
   * When set with `groupPad`, instances are packed into groups of `groupSize`
   * records followed by `groupPad` padding bytes (Kenwood TH-D74: 6 × 40 + 16).
   */
  groupSize?: number;
  /** Padding bytes after each group of `groupSize` records. */
  groupPad?: number;
  /** Occupancy rule for repeated structs (e.g. empty channel slots). */
  emptyWhen?: RadioMemoryMapEmptyWhen;
  /**
   * When encoding, fill missing/null instances with 0xFF for `stride` bytes
   * (Chirp-like channel clear). Defaults to false.
   */
  clearEmpty?: boolean;
}

/**
 * Maps decoded struct fields onto portable RadioChannel fields.
 * Remaining record fields become RadioProgrammedChannel.settings.
 */
export interface RadioMemoryMapChannelBindings {
  /** Struct id of the channel record array. */
  records: string;
  /** Optional parallel name table struct id. */
  names?: string;
  /** Field id within the names struct (default "name"). */
  nameField?: string;
  receiveFrequency: string;
  transmitFrequency: string;
  receiveTone: string;
  transmitTone: string;
  /**
   * Optional parallel struct whose fields merge into each channel's settings
   * (Kenwood TH-D74 flags: used, lockout, group). Occupancy `emptyWhen` on
   * this struct, when present, also skips the channel.
   */
  extras?: string;
}

/**
 * Complete memory-map definition for a radio model's settings and channels.
 */
export interface RadioMemoryMap {
  /** Optional map version for tooling. */
  version?: string;
  description?: string;
  structs: RadioMemoryMapStruct[];
  /** Optional projection from channel structs into RadioProgram.channels. */
  channelBindings?: RadioMemoryMapChannelBindings;
}
