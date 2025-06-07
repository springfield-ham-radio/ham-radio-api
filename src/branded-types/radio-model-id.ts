import { type Brand, make } from 'ts-brand';

export type RadioModelId = Brand<string, 'radio-model-id'>;
export const RadioModelId = make<RadioModelId>();
