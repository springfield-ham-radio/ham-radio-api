import { Brand, make } from 'ts-brand';

export type RadioModelId = Brand<number, 'radio-model-id'>;
export const RadioModelId = make<RadioModelId>();
