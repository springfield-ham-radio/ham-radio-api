import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { HOME_STATION_ID, MAX_ANTENNA_HEIGHT_AGL_M, MAX_LATITUDE, MAX_LONGITUDE, MIN_ANTENNA_HEIGHT_AGL_M, MIN_LATITUDE, MIN_LONGITUDE } from "../../dist/index.js";

describe("station antenna contract", () => {
  it("should keep Home as a stable station id", () => {
    assert.equal(HOME_STATION_ID, "station-home");
  });

  it("should bound antenna height in meters AGL", () => {
    assert.equal(MIN_ANTENNA_HEIGHT_AGL_M, 0.5);
    assert.equal(MAX_ANTENNA_HEIGHT_AGL_M, 120);
  });

  it("should bound station coordinates in signed decimal degrees", () => {
    assert.equal(MIN_LATITUDE, -90);
    assert.equal(MAX_LATITUDE, 90);
    assert.equal(MIN_LONGITUDE, -180);
    assert.equal(MAX_LONGITUDE, 180);
  });
});
