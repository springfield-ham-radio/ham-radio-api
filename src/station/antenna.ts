import type { Wavelength } from "../branded-types/wavelength.js";
import type { AntennaTypeId } from "../antenna/type.js";

export const MIN_ANTENNA_HEIGHT_AGL_M = 0.5;
export const MAX_ANTENNA_HEIGHT_AGL_M = 120;

/**
 * One physical antenna owned by one station or one radio.
 *
 * A station antenna is installed at a site (`stationId`). A radio antenna is
 * mounted on a saved radio (`radioId`) and moves with it, such as a handheld
 * whip. Exactly one of `stationId` and `radioId` is set. The same radiator
 * on two owners is two records. `bands` are ham {@link SpectrumBand.wavelength}
 * values, not a second band catalog.
 *
 * Height for a radio-mounted antenna is a low figure, about head height,
 * because the site is wherever that radio is operating.
 */
export interface StationAntenna {
  id: string;
  /** Site where this antenna is installed. Absent when `radioId` is set. */
  stationId?: string;
  /** Saved radio this antenna is mounted on. Absent when `stationId` is set. */
  radioId?: string;
  nickname: string;
  /** Free-text maker, such as Nagoya. Omitted when blank. Not a manufacturer catalog. */
  manufacturer?: string;
  /** Free-text model, such as NA-771. Omitted when blank. */
  model?: string;
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
