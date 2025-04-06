import { Frequency } from '../branded-types/frequency.js';
import { licenseClassId } from '../branded-types/license-class-id.js';
import { SpectrumBandId } from '../branded-types/spectrum-band-id.js';
import { SpectrumModeId } from '../branded-types/spectrum-mode-id.js';
import { SpectrumPrivilegeId } from '../branded-types/spectrum-privlege-id.js';

export interface SpectrumPrivilege {
  id: SpectrumPrivilegeId;
  licenseClassId: licenseClassId;
  mode: SpectrumModeId;
  band: SpectrumBandId;
  lowerFrequency: Frequency;
  upperFrequency: Frequency;
}
