import { describe, expect, it } from "vitest";
import { ANTENNA_TYPES, Wavelength, antennaBandsAreLineOfSight, antennaTypeById, antennaTypeUsesHeading, bandsForEnabledTraps, estimateGainDbi, estimateTakeoffDeg, isAntennaTypeId, isHfAntennaBand, trapResonantBands } from "../../dist/index.js";

describe("antenna types", () => {
  it("should expose the generic families used for station antennas", () => {
    expect(ANTENNA_TYPES.map((type) => type.id)).toEqual([
      "dipole",
      "inverted-v",
      "quarter-wave-vertical",
      "yagi-3el",
      "magloop",
      "end-fed",
      "dual-band-vertical",
      "vhf-yagi",
      "uhf-yagi",
    ]);
  });

  it("should treat only catalog ids as antenna types", () => {
    expect(isAntennaTypeId("dipole")).toBe(true);
    expect(isAntennaTypeId("yagi-3el")).toBe(true);
    expect(isAntennaTypeId("A3S")).toBe(false);
    expect(isAntennaTypeId(undefined)).toBe(false);
  });

  it("should require a heading for dipole and Yagi, not for a vertical", () => {
    expect(antennaTypeUsesHeading(antennaTypeById("dipole")!)).toBe(true);
    expect(antennaTypeUsesHeading(antennaTypeById("yagi-3el")!)).toBe(true);
    expect(antennaTypeUsesHeading(antennaTypeById("quarter-wave-vertical")!)).toBe(false);
    expect(antennaTypeUsesHeading(antennaTypeById("dual-band-vertical")!)).toBe(false);
  });

  it("should tag antennas with SpectrumBand wavelength, not a parallel band list", () => {
    expect(antennaTypeById("dipole")?.defaultBands).toEqual([Wavelength(40)]);
    expect(antennaTypeById("dual-band-vertical")?.defaultBands).toEqual([Wavelength(2), Wavelength(0.7)]);
    expect(isHfAntennaBand(Wavelength(40))).toBe(true);
    expect(isHfAntennaBand(Wavelength(6))).toBe(true);
    expect(isHfAntennaBand(Wavelength(2))).toBe(false);
    expect(isHfAntennaBand(Wavelength(0.7))).toBe(false);
  });

  it("should treat only 2 m / 70 cm wavelengths as line-of-sight", () => {
    expect(antennaBandsAreLineOfSight([Wavelength(2), Wavelength(0.7)])).toBe(true);
    expect(antennaBandsAreLineOfSight([Wavelength(20)])).toBe(false);
    expect(antennaBandsAreLineOfSight([Wavelength(2), Wavelength(20)])).toBe(false);
    expect(antennaBandsAreLineOfSight([])).toBe(false);
  });

  it("should lower estimated takeoff as a Yagi is raised in wavelengths", () => {
    const yagi = antennaTypeById("yagi-3el")!;
    const low = estimateTakeoffDeg(yagi, 10, Wavelength(20));
    const high = estimateTakeoffDeg(yagi, 20, Wavelength(20));

    expect(high < low).toBeTruthy();
  });

  it("should put traps on every HF band except the lowest", () => {
    expect(trapResonantBands([Wavelength(80), Wavelength(40)])).toEqual([Wavelength(40)]);
    expect(trapResonantBands([Wavelength(20), Wavelength(15), Wavelength(10)])).toEqual([Wavelength(15), Wavelength(10)]);
  });

  it("should add the next-lower HF band when traps are enabled on a single band", () => {
    expect(bandsForEnabledTraps([Wavelength(40)])).toEqual([Wavelength(80), Wavelength(40)]);
  });

  it("should derate catalog gain when traps are in the elements", () => {
    const dipole = antennaTypeById("dipole")!;

    expect(estimateGainDbi(dipole, false)).toBe(dipole.gainDbi);
    expect(estimateGainDbi(dipole, true)).toBe(1.65);
  });
});
