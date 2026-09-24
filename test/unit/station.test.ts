import { describe, expect, it } from "vitest";
import { HOME_STATION_ID, MAX_ANTENNA_HEIGHT_AGL_M, MAX_LATITUDE, MAX_LONGITUDE, MIN_ANTENNA_HEIGHT_AGL_M, MIN_LATITUDE, MIN_LONGITUDE } from "../../dist/index.js";

describe("station antenna contract", () => {
  it("should keep Home as a stable station id", () => {
    expect(HOME_STATION_ID).toBe("station-home");
  });

  it("should bound antenna height in meters AGL", () => {
    expect(MIN_ANTENNA_HEIGHT_AGL_M).toBe(0.5);
    expect(MAX_ANTENNA_HEIGHT_AGL_M).toBe(120);
  });

  it("should bound station coordinates in signed decimal degrees", () => {
    expect(MIN_LATITUDE).toBe(-90);
    expect(MAX_LATITUDE).toBe(90);
    expect(MIN_LONGITUDE).toBe(-180);
    expect(MAX_LONGITUDE).toBe(180);
  });
});
