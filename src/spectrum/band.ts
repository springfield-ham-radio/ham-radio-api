import type { Frequency } from '../branded-types/frequency.js';
import type { LicenseClassId } from '../branded-types/license-class-id.js';
import type { SpectrumBandId } from '../branded-types/spectrum-band-id.js';
import type { SpectrumChannel } from './channel.js';
import type { Wavelength } from '../branded-types/wavelength.js';

export interface SpectrumBand {
  id: SpectrumBandId;
  name: string;
  wavelength: Wavelength;
  lowerFrequency: Frequency;
  upperFrequency: Frequency;
  frequencyDisplayBaseMultiplier: number;
  frequencyDisplayNumberDecimals: number;
  privileges: LicenseClassId[];
  channels?: SpectrumChannel[];
}
