import { type Brand, make } from 'ts-brand';

export type RadioModuleId = Brand<string, 'radio-module-id'>;
export const RadioModuleId = make<RadioModuleId>();
