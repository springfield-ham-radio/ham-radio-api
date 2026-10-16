import { describe, expect, it } from "vitest";
import {
  GeoPoint,
  MAX_LATITUDE,
  MAX_LONGITUDE,
  MIN_LATITUDE,
  MIN_LONGITUDE,
  isGeoPoint,
} from "../../dist/index.js";

describe("GeoPoint", () => {
  it("should expose WGS84 latitude and longitude bounds", () => {
    expect(MIN_LATITUDE).toBe(-90);
    expect(MAX_LATITUDE).toBe(90);
    expect(MIN_LONGITUDE).toBe(-180);
    expect(MAX_LONGITUDE).toBe(180);
  });

  it("should accept in-range finite coordinates", () => {
    const point: GeoPoint = { latitude: 39.7817, longitude: -89.6501 };
    expect(isGeoPoint(point)).toBe(true);
    expect(isGeoPoint({ latitude: MIN_LATITUDE, longitude: MIN_LONGITUDE })).toBe(true);
    expect(isGeoPoint({ latitude: MAX_LATITUDE, longitude: MAX_LONGITUDE })).toBe(true);
  });

  it("should reject out-of-range, non-numeric, or partial values", () => {
    expect(isGeoPoint({ latitude: 91, longitude: 0 })).toBe(false);
    expect(isGeoPoint({ latitude: 0, longitude: 181 })).toBe(false);
    expect(isGeoPoint({ latitude: "39", longitude: -89 })).toBe(false);
    expect(isGeoPoint({ latitude: 39 })).toBe(false);
    expect(isGeoPoint({ latitude: Number.NaN, longitude: 0 })).toBe(false);
    expect(isGeoPoint(null)).toBe(false);
    expect(isGeoPoint(undefined)).toBe(false);
  });
});
