import { Brand, make } from 'ts-brand';

export type RadioId = Brand<string, 'radio-id'>;
export const RadioId = make<RadioId>();
