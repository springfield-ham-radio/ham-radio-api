import type { Brand } from 'ts-brand';
import { make } from 'ts-brand';

export type Wavelength = Brand<number, 'wavelength'>;
export const Wavelength = make<Wavelength>();
