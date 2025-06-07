import { type Brand, make } from 'ts-brand';

export type Frequency = Brand<number, 'frequency'>;
export const Frequency = make<Frequency>();
