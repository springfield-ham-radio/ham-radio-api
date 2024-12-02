import { SpectrumChannel } from './channel.js';

export interface SpectrumBand {
  id?: string;
  name: string;
  wavelength: number;
  lowerFrequency: number;
  upperFrequency: number;
  frequencyDisplayBaseMultiplier: number;
  frequencyDisplayNumberDecimals: number;
  privilegeIds: string[];
  channels?: SpectrumChannel[];
}
