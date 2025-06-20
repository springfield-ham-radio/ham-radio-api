import type { RadioId } from './id.js';
import type { RadioMemoryConfig } from './memory-config.js';
import type { RadioProtocolStep } from './protocol.js';
import type { RadioSchema } from './schema.js';
import type { RadioSerialConfig } from './serial-config.js';

export interface Radio {
  id: RadioId;
  settingsSchema: RadioSchema;
  memoryConfig: RadioMemoryConfig;
  serialConfig: RadioSerialConfig;
  readMemory: RadioProtocolStep[];
  writeMemory: RadioProtocolStep[];
}
