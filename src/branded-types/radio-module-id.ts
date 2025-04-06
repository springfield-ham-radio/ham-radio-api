import { Brand, make } from 'ts-brand';

export type RadioModuleId = Brand<number, 'radio-module-id'>;
export const RadioModuleId = make<RadioModuleId>();
