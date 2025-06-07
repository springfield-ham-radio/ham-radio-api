import type { Brand } from 'ts-brand';
import { make } from 'ts-brand';

export type Frequency = Brand<number, 'frequency'>;
export const Frequency = make<Frequency>();
