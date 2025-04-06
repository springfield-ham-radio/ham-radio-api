import { Brand, make } from 'ts-brand';

export type SpectrumBandId = Brand<number, 'spectrum-band-id'>;
export const SpectrumBandId = make<SpectrumBandId>();
