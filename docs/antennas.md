# Stations and antennas

Shared types and catalogs for HamBench operating sites and the antennas at those sites. Persistence, Maidenhead conversion, and UI drafts stay in the app.

Amateur allocations are `SpectrumBand` (rows in `@springfield/ham-radio-utils`). Antenna tags are that band’s `wavelength`, not a parallel band list.

`2 m` / `70 cm` (wavelength 2 / 0.7) are valid antenna tags. They are not on the WWV openings chart.

## Station

A **station** is a site (Home, Cabin, Portable), not a log `STATION_CALLSIGN`.

```typescript
import type { RadioStation, StationAntenna } from "@springfield/ham-radio-api";
```

- `RadioStation` — nickname, optional Maidenhead grid, optional signed decimal latitude / longitude, `locationSource` (`grid` | `coordinates`)
- `HOME_STATION_ID` — stable id for the default Home site (`station-home`)
- Coordinates are stored as decimal degrees. A UI may collect them as degrees, minutes, and decimal seconds.

Editing the grid implies lat/lon are the **cell center**. Editing coordinates keeps that point and derives a 6-character grid.

## Antenna

A **station antenna** is one physical antenna at one station. The same radiator at two sites is two records.

```typescript
import { ANTENNA_TYPES, antennaTypeById, isAntennaTypeId } from "@springfield/ham-radio-api";
```

- `AntennaType` / `ANTENNA_TYPES` — generic families (dipole, inverted-V, quarter-wave vertical, 3-element Yagi, magloop, end-fed, dual-band vertical, 2 m Yagi, 70 cm Yagi)
- `StationAntenna.bands` — `Wavelength` values from `SpectrumBand`
- Height is 0.5–120 m AGL. Heading is true degrees of maximum radiation and is omitted for omni types.

Gain, beamwidth, and takeoff helpers are catalog estimates, not manufacturer specs or NEC runs.
