import { Brand, make } from 'ts-brand';

export type RadioId = Brand<number, 'radio-id'>;
export const RadioId = make<RadioId>();
