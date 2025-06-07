import type { Brand } from 'ts-brand';
import { make } from 'ts-brand';

export type SpectrumBandId = Brand<string, 'spectrum-band-id'>;
export const SpectrumBandId = make<SpectrumBandId>();
