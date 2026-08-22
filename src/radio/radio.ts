import type { RadioId } from "./id.js";
import type { RadioMemoryConfig } from "./memory-config.js";
import type { RadioMemoryMap } from "./memory-map.js";
import type { RadioProtocolStep } from "./protocol.js";
import type { RadioSchema } from "./schema.js";
import type { RadioSerialConfig } from "./serial-config.js";

export interface Radio {
  id: RadioId;
  version: string;
  description: string;
  settingsSchema: RadioSchema;
  memoryConfig: RadioMemoryConfig;
  serialConfig: RadioSerialConfig;
  readMemory: RadioProtocolStep[];
  writeMemory: RadioProtocolStep[];
  /**
   * Optional JSON memory-map for radio-wide settings decode/encode.
   * May be an inline map or a path/$ref resolved by the registry/module.
   */
  memoryMap?: RadioMemoryMap | { $ref: string };
}
