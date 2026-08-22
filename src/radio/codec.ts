import type { RadioMemory } from "./memory.js";
import type { RadioProgram } from "./program.js";

export interface RadioCodec {
  decode(memory: RadioMemory): RadioProgram;
  encode(program: RadioProgram, memory: RadioMemory): RadioMemory;
}
