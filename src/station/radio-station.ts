/**
 * Default Home site id. HamBench always has at least this station.
 */
export const HOME_STATION_ID = "station-home";

export const MIN_LATITUDE = -90;
export const MAX_LATITUDE = 90;
export const MIN_LONGITUDE = -180;
export const MAX_LONGITUDE = 180;

/**
 * Whether the operator last edited the Maidenhead grid or the coordinates.
 *
 * Editing the grid sets lat/lon to the cell center. Editing coordinates keeps
 * that point and derives a 6-character grid.
 */
export type StationLocationSource = "grid" | "coordinates";

/**
 * An operating site (Home, Cabin, Portable), not a log STATION_CALLSIGN.
 *
 * Latitude and longitude are signed decimal degrees (south / west negative).
 * UIs may collect them as degrees, minutes, and decimal seconds.
 */
export interface RadioStation {
  id: string;
  nickname: string;
  gridsquare?: string;
  latitude?: number;
  longitude?: number;
  locationSource?: StationLocationSource;
  createdAt: number;
  updatedAt: number;
}
