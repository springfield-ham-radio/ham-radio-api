import type { RadioId } from "./id.js";
import type { RadioMemoryConfig } from "./memory-config.js";
import type { RadioMemoryMap } from "./memory-map.js";
import type { RadioOnError, RadioProtocolStep } from "./protocol.js";
import type { RadioSchema } from "./schema.js";
import type { RadioDialogMessage } from "./dialog-message.js";
import type { RadioSerialConfig } from "./serial-config.js";

export interface Radio {
  id: RadioId;
  version: string;
  description: string;
  /**
   * Optional setup text for HamBench **Read from Radio** (plain text; see `RadioDialogMessage`).
   */
  readMessage?: RadioDialogMessage;
  /**
   * Optional setup text for HamBench **Write to Radio** (plain text; see `RadioDialogMessage`).
   */
  writeMessage?: RadioDialogMessage;
  settingsSchema: RadioSchema;
  memoryConfig: RadioMemoryConfig;
  serialConfig: RadioSerialConfig;
  readMemory: RadioProtocolStep[];
  writeMemory: RadioProtocolStep[];
  /**
   * Optional cleanup exchanges after a failed or cancelled read/write. Not run on success;
   * skipped when the port is closed. Each list may only contain exchange steps (`send`,
   * `expect`, `setBaudRate`, `delay`, `timeout`), not read/write/CAT loops.
   *
   * @example Kenwood TH-D74 clone exit at the post-switch baud:
   * `[{ setBaudRate: 57600 }, { send: ['E'] }]`
   */
  onError?: RadioOnError;
  /**
   * Optional JSON memory-map for radio-wide settings decode/encode.
   * May be an inline map or a path/$ref resolved by the registry/module.
   */
  memoryMap?: RadioMemoryMap | { $ref: string };
}
