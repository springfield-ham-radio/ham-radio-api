import type { RadioSettingValue } from "./memory-map.js";

/**
 * Decoded radio-wide settings.
 *
 * Values may be nested objects (struct id → fields) or arrays (repeated structs).
 * Channel-specific settings may still use a flat map of primitives.
 */
export type RadioSettings = {
  [setting: string]: RadioSettingValue;
};
