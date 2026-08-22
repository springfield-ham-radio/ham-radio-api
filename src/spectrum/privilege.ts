import type { Frequency } from "../branded-types/frequency.js";
import type { LicenseClassId } from "../branded-types/license-class-id.js";
import type { SpectrumBandId } from "../branded-types/spectrum-band-id.js";
import type { SpectrumModeId } from "../branded-types/spectrum-mode-id.js";
import type { SpectrumPrivilegeId } from "../branded-types/spectrum-privilege-id.js";

export interface SpectrumPrivilege {
  id: SpectrumPrivilegeId;
  licenseClassId: LicenseClassId;
  mode: SpectrumModeId;
  band: SpectrumBandId;
  lowerFrequency: Frequency;
  upperFrequency: Frequency;
}
