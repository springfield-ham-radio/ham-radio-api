/**
 * Canonical geographic point for station sites and related APIs.
 *
 * **Decision (issue #19):** coordinates are {@link GeoPoint} with signed decimal
 * degrees on WGS84. SQLite stores two REAL columns (`latitude`, `longitude`).
 * GeoJSON Point (`[longitude, latitude]`, RFC 7946) is used only at map/API
 * boundaries — no GeoJSON blobs in the database and no spatial extensions or
 * indexes. Maidenhead grid squares are a derived display format, stored only
 * where exchanged (station `gridsquare`, QSO grids). String sources such as
 * Callook are parsed at the edge; lat/lon in this package are always numbers.
 */
export const MIN_LATITUDE = -90;
export const MAX_LATITUDE = 90;
export const MIN_LONGITUDE = -180;
export const MAX_LONGITUDE = 180;

/**
 * A point on the WGS84 ellipsoid as signed decimal degrees (south / west negative).
 */
export interface GeoPoint {
  latitude: number;
  longitude: number;
}

/**
 * Returns whether `value` is a {@link GeoPoint} with finite coordinates inside
 * {@link MIN_LATITUDE}–{@link MAX_LATITUDE} and {@link MIN_LONGITUDE}–{@link MAX_LONGITUDE}.
 */
export function isGeoPoint(value: unknown): value is GeoPoint {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as GeoPoint;
  return (
    typeof candidate.latitude === "number" &&
    typeof candidate.longitude === "number" &&
    Number.isFinite(candidate.latitude) &&
    Number.isFinite(candidate.longitude) &&
    candidate.latitude >= MIN_LATITUDE &&
    candidate.latitude <= MAX_LATITUDE &&
    candidate.longitude >= MIN_LONGITUDE &&
    candidate.longitude <= MAX_LONGITUDE
  );
}
