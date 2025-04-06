import { Frequency } from '../branded-types/frequency.js';
import { licenseClassId } from '../branded-types/license-class-id.js';
import { SpectrumBandId } from '../branded-types/spectrum-band-id.js';
import { Wavelength } from '../branded-types/wavelength.js';
import { SpectrumChannel } from './channel.js';

export interface SpectrumBand {
  id: SpectrumBandId;
  name: string;
  wavelength: Wavelength;
  lowerFrequency: Frequency;
  upperFrequency: Frequency;
  frequencyDisplayBaseMultiplier: number;
  frequencyDisplayNumberDecimals: number;
  privileges: licenseClassId[];
  channels?: SpectrumChannel[];
}
