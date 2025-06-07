import type { Brand } from 'ts-brand';
import { make } from 'ts-brand';

export type RadioModuleId = Brand<string, 'radio-module-id'>;
export const RadioModuleId = make<RadioModuleId>();
