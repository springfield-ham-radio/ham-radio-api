import type { RadioId } from './id.js';
import type { RadioMemory } from './memory.js';
import type { RadioMemoryConfig } from './memory-config.js';
import type { RadioProgram } from './program.js';
import type { RadioSchema } from './schema.js';

export interface Radio {
  getId(): RadioId;
  getSchema(): Promise<RadioSchema>;
  getMemoryConfig(): RadioMemoryConfig;
  decodeMemory(memory: RadioMemory): RadioProgram;
  encodeProgram(program: RadioProgram, memory: RadioMemory): RadioMemory;
}
