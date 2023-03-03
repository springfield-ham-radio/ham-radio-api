import { SpectrumChannel } from './channel';

export interface SpectrumBand {
  id?: string;
  name: string;
  wavelength: number;
  lowerFrequency: number;
  upperFrequency: number;
  privilegeIds: string[];
  channels?: SpectrumChannel[];
}
