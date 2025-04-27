import { RadioId } from './id.js';
import { RadioMemory } from './memory.js';
import { RadioProgram } from './program.js';
import { RadioSchema } from './schema.js';

export interface Radio {
  getId(): RadioId;
  getName(): string;
  getManufacturer(): string;
  getSchema(): Promise<RadioSchema>;
  decodeMemory(memory: RadioMemory): RadioProgram;
  encodeProgram(program: RadioProgram, memory: RadioMemory): RadioMemory;
}
