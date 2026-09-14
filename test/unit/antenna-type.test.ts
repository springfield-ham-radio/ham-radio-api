import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ANTENNA_TYPES, Wavelength, antennaBandsAreLineOfSight, antennaTypeById, antennaTypeUsesHeading, bandsForEnabledTraps, estimateGainDbi, estimateTakeoffDeg, isAntennaTypeId, isHfAntennaBand, trapResonantBands } from "../../dist/index.js";

describe("antenna types", () => {
  it("should expose the generic families used for station antennas", () => {
    assert.deepEqual(
      ANTENNA_TYPES.map((type) => type.id),
      ["dipole", "inverted-v", "quarter-wave-vertical", "yagi-3el", "magloop", "end-fed", "dual-band-vertical", "vhf-yagi", "uhf-yagi"],
    );
  });

  it("should treat only catalog ids as antenna types", () => {
    assert.equal(isAntennaTypeId("dipole"), true);
    assert.equal(isAntennaTypeId("yagi-3el"), true);
    assert.equal(isAntennaTypeId("A3S"), false);
    assert.equal(isAntennaTypeId(undefined), false);
  });

  it("should require a heading for dipole and Yagi, not for a vertical", () => {
    assert.equal(antennaTypeUsesHeading(antennaTypeById("dipole")!), true);
    assert.equal(antennaTypeUsesHeading(antennaTypeById("yagi-3el")!), true);
    assert.equal(antennaTypeUsesHeading(antennaTypeById("quarter-wave-vertical")!), false);
    assert.equal(antennaTypeUsesHeading(antennaTypeById("dual-band-vertical")!), false);
  });

  it("should tag antennas with SpectrumBand wavelength, not a parallel band list", () => {
    assert.deepEqual(antennaTypeById("dipole")?.defaultBands, [Wavelength(40)]);
    assert.deepEqual(antennaTypeById("dual-band-vertical")?.defaultBands, [Wavelength(2), Wavelength(0.7)]);
    assert.equal(isHfAntennaBand(Wavelength(40)), true);
    assert.equal(isHfAntennaBand(Wavelength(6)), true);
    assert.equal(isHfAntennaBand(Wavelength(2)), false);
    assert.equal(isHfAntennaBand(Wavelength(0.7)), false);
  });

  it("should treat only 2 m / 70 cm wavelengths as line-of-sight", () => {
    assert.equal(antennaBandsAreLineOfSight([Wavelength(2), Wavelength(0.7)]), true);
    assert.equal(antennaBandsAreLineOfSight([Wavelength(20)]), false);
    assert.equal(antennaBandsAreLineOfSight([Wavelength(2), Wavelength(20)]), false);
    assert.equal(antennaBandsAreLineOfSight([]), false);
  });

  it("should lower estimated takeoff as a Yagi is raised in wavelengths", () => {
    const yagi = antennaTypeById("yagi-3el")!;
    const low = estimateTakeoffDeg(yagi, 10, Wavelength(20));
    const high = estimateTakeoffDeg(yagi, 20, Wavelength(20));

    assert.ok(high < low);
  });

  it("should put traps on every HF band except the lowest", () => {
    assert.deepEqual(trapResonantBands([Wavelength(80), Wavelength(40)]), [Wavelength(40)]);
    assert.deepEqual(trapResonantBands([Wavelength(20), Wavelength(15), Wavelength(10)]), [Wavelength(15), Wavelength(10)]);
  });

  it("should add the next-lower HF band when traps are enabled on a single band", () => {
    assert.deepEqual(bandsForEnabledTraps([Wavelength(40)]), [Wavelength(80), Wavelength(40)]);
  });

  it("should derate catalog gain when traps are in the elements", () => {
    const dipole = antennaTypeById("dipole")!;

    assert.equal(estimateGainDbi(dipole, false), dipole.gainDbi);
    assert.equal(estimateGainDbi(dipole, true), 1.65);
  });
});
