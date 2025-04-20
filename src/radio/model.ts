import { RadioModelId } from '../branded-types/radio-model-id.js';
import { RadioModuleId } from '../branded-types/radio-module-id.js';
import { RadioMemory } from './memory.js';
import { RadioProgram } from './program.js';
import { RadioSchema } from './schema.js';

export interface RadioModel {
  id: RadioModelId;
  module: RadioModuleId;
  name: string;
  manufacturer: string;
  getSchema(): Promise<RadioSchema>;
  decodeMemory(memory: RadioMemory): RadioProgram;
  encodeProgram(program: RadioProgram, memory: RadioMemory): RadioMemory;
}
