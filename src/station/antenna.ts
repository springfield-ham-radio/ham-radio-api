import type { Wavelength } from "../branded-types/wavelength.js";
import type { AntennaTypeId } from "../antenna/type.js";

export const MIN_ANTENNA_HEIGHT_AGL_M = 0.5;
export const MAX_ANTENNA_HEIGHT_AGL_M = 120;

/**
 * One physical antenna at one station.
 *
 * The same radiator at two sites is two records. `bands` are ham
 * {@link SpectrumBand.wavelength} values, not a second band catalog.
 */
export interface StationAntenna {
  id: string;
  stationId: string;
  nickname: string;
  typeId: AntennaTypeId;
  heightAglM: number;
  /** True heading of maximum radiation, 0–359. Omitted for omni types. */
  headingDeg?: number;
  bands: Wavelength[];
  /** LC traps in the elements. Omitted when the type is a single-band or trapless. */
  trapped?: boolean;
  createdAt: number;
  updatedAt: number;
}
