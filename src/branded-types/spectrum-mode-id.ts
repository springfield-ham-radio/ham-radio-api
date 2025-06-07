import type { Brand } from 'ts-brand';
import { make } from 'ts-brand';

export type SpectrumModeId = Brand<string, 'spectrum-mode-id'>;
export const SpectrumModeId = make<SpectrumModeId>();
