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

/** How a field's raw bits/bytes become a setting value. */
export type RadioMemoryMapValueKind =
  | { kind: "integer"; min?: number; max?: number }
  | { kind: "boolean" }
  | { kind: "enum"; values: string[] }
  | { kind: "ascii"; length: number }
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
 * Bitfields pack into the current byte from LSB; width bits are consumed.
 */
export interface RadioMemoryMapField {
  id: string;
  /**
   * Storage type:
   * - u8 / u16: whole bytes (u16 is little-endian, Chirp ul16)
   * - bits: bitfield of `width` bits within the current byte (LSB-first)
   * - char: ASCII byte (length via value.kind ascii or count)
   */
  type: "u8" | "u16" | "bits" | "char";
  /** Bit width when type is bits. */
  width?: number;
  /** When true, skip decode/encode for this padding field. */
  reserved?: boolean;
  value?: RadioMemoryMapValueKind;
  ui?: RadioMemoryMapFieldUi;
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
   * Used for PTT-ID code tables.
   */
  count?: number;
  stride?: number;
}

/**
 * Complete memory-map definition for a radio model's settings.
 */
export interface RadioMemoryMap {
  /** Optional map version for tooling. */
  version?: string;
  description?: string;
  structs: RadioMemoryMapStruct[];
}
