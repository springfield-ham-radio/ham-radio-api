## [17.10.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.9.3...v17.10.0) (2026-09-15)

### Features

* allow delay on chunked memory read steps ([47b0b0e](https://github.com/springfield-ham-radio/ham-radio-api/commit/47b0b0e120b1a80a5e65f9993de915b5a830a136))

## [17.9.3](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.9.2...v17.9.3) (2026-09-14)

### Bug Fixes

* update nested brace-expansion to 2.1.4 ([55005b8](https://github.com/springfield-ham-radio/ham-radio-api/commit/55005b8ee7a0ae331b2d31598c70226417fd7372))

## [17.9.2](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.9.1...v17.9.2) (2026-09-14)

### Bug Fixes

* update nested tar to 7.5.22 ([0660c04](https://github.com/springfield-ham-radio/ham-radio-api/commit/0660c04fc92ab892573f7de2ce4a537c83ed57e0))

## [17.9.1](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.9.0...v17.9.1) (2026-09-14)

### Bug Fixes

* update loglayer to 9.4.0 and nested yaml/uri parser patches ([09f02ef](https://github.com/springfield-ham-radio/ham-radio-api/commit/09f02eff6cb8a0097de6be4f46ced724f6e1b3b6))

## [17.9.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.8.0...v17.9.0) (2026-09-14)

### Features

* add station and antenna types ([252933f](https://github.com/springfield-ham-radio/ham-radio-api/commit/252933f9415253b0b4e5d04d839581eede484b19))

## [17.8.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.7.0...v17.8.0) (2026-09-13)

### Features

* add optional memory-map ui.order for settings display ([594c084](https://github.com/springfield-ham-radio/ham-radio-api/commit/594c0847a89043a5438a68249db0ad938a056d73))

## [17.7.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.6.0...v17.7.0) (2026-09-13)

### Features

* add memory-map setting groups and sub-groups ([7d67cc3](https://github.com/springfield-ham-radio/ham-radio-api/commit/7d67cc3be4143dab67fe2e2d88e5541164d0de4a))

## [17.6.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.5.0...v17.6.0) (2026-09-11)

### Features

* add serialConfig baudRates for programming port selection ([55c0b23](https://github.com/springfield-ham-radio/ham-radio-api/commit/55c0b2375a1788a886c28b3788895541abe1b2b8))

## [17.5.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.4.0...v17.5.0) (2026-09-07)

### Features

* add live CAT memory steps and serial RTS/DTR ([a7e83f8](https://github.com/springfield-ham-radio/ham-radio-api/commit/a7e83f87b38fed2d62a139073310952667451e9b))

## [17.4.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.3.0...v17.4.0) (2026-08-28)

### Features

* add Kenwood clone types to the memory-map and protocol DSLs ([4ab90cb](https://github.com/springfield-ham-radio/ham-radio-api/commit/4ab90cb30f5708d0a67271520b68060162adb57d))

## [17.3.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.2.0...v17.3.0) (2026-08-23)

### Features

* add write chunkSize, delay, and skip to the protocol DSL ([da6eea7](https://github.com/springfield-ham-radio/ham-radio-api/commit/da6eea7fa0541bc4c9929d39a983a4950c4d1460))

## [17.2.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.1.0...v17.2.0) (2026-08-22)

### Features

* extend memory-map DSL for channels (lbcd, tone, bindings) ([e26f31b](https://github.com/springfield-ham-radio/ham-radio-api/commit/e26f31bed089a7a72668e2cde8599f234618c1af))

## [17.1.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v17.0.0...v17.1.0) (2026-08-22)

### Features

* add memory-map DSL types and nested radio settings ([3883e67](https://github.com/springfield-ham-radio/ham-radio-api/commit/3883e67693230ec17c249835c88bb8ec45fe0ac1))

## [17.0.0](https://github.com/springfield-ham-radio/ham-radio-api/compare/v16.3.4...v17.0.0) (2026-08-22)

### ⚠ BREAKING CHANGES

* RadioProtocolStep is now RadioExchange | RadioReadStep | RadioWriteStep. Removed sendReceive, send, receive, readSegment, writeSegment, setVariable, and typed receive patterns in favor of flat send/expect and $placeholders.

Co-authored-by: Cursor <cursoragent@cursor.com>

### Features

* replace protocol DSL types with send/expect exchanges ([9db8ea8](https://github.com/springfield-ham-radio/ham-radio-api/commit/9db8ea8d99023fb260e7dcc7165585dce1224429))

## [16.3.4](https://github.com/springfield-ham-radio/ham-radio-api/compare/v16.3.3...v16.3.4) (2026-08-22)

### Bug Fixes

* migrate to TypeScript 7 and update dependencies ([fe42ab8](https://github.com/springfield-ham-radio/ham-radio-api/commit/fe42ab89aadee2a45f667dd00d94baec7ba02132))

## <small>16.3.3 (2025-12-17)</small>

* ci: update Node.js version from 22 to 24 ([2d65aaf](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/2d65aaf))
* fix: update dependencies ([98279fe](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/98279fe))
* Merge branch 'renovate/oxlint-1.x' into 'main' ([bdabeb1](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/bdabeb1))
* Merge branch 'renovate/yarn-monorepo' into 'main' ([71996a0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/71996a0))
* chore(deps): update dependency oxlint to v1.25.0 ([bcadbcd](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/bcadbcd))
* chore(deps): update yarn to v4.11.0 ([20fb8e7](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/20fb8e7))

## [16.3.2](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v16.3.1...v16.3.2) (2025-10-29)


### Bug Fixes

* **deps:** update dependency loglayer to ^6.10.0 ([01a5ce9](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/01a5ce9c60e01fc4695cec744deab3b227424533))

## [16.3.1](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v16.3.0...v16.3.1) (2025-10-15)


### Bug Fixes

* **deps:** update dependency loglayer to ^6.9.1 ([9e95ff2](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/9e95ff2ffd90d93f3b2ed14bf2de4e2eb35a0b36))

## [16.3.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v16.2.0...v16.3.0) (2025-09-13)


### Features

* add addressEndianness property to RadioMemoryConfig interface ([88aa089](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/88aa089148681a9a8cac4442716278222dd9ddf0))

## [16.2.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v16.1.4...v16.2.0) (2025-09-13)


### Features

* add optional properties to RadioConnection and RadioMemoryConfig interfaces ([269be54](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/269be5428eaf415115d2e0eaf573b83a86b5c3ec))

## [16.1.4](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v16.1.3...v16.1.4) (2025-09-12)


### Bug Fixes

* **deps:** update dependency loglayer to ^6.7.0 ([2205549](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/2205549cf77b4bdb259d78b9772e16dc8a943cac))

## [16.1.3](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v16.1.2...v16.1.3) (2025-08-17)


### Bug Fixes

* simplify .oxlintrc.json configuration and update linting scripts in package.json ([64caf9a](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/64caf9a3e5668ee2d6ec265fc620fb5942432a21))

## [16.1.2](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v16.1.1...v16.1.2) (2025-07-11)


### Bug Fixes

* **deps:** update dependency loglayer to ^6.6.0 ([fff96d2](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/fff96d2113dfc7a5289bb6dd024374892bee6975))

## [16.1.1](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v16.1.0...v16.1.1) (2025-06-23)


### Bug Fixes

* add new DCS codes D054 and D122 to the DCS enum ([2aff4e1](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/2aff4e1c1dccec2522cb90749b7a64e3a268e383))

## [16.1.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v16.0.0...v16.1.0) (2025-06-23)


### Features

* add loglayer dependency and enhance radio module exports ([a8e5363](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/a8e5363f6ac40a0c2cb9fb4495d241776400cef9))

## [16.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v15.0.0...v16.0.0) (2025-06-23)


### ⚠ BREAKING CHANGES

* enhance RadioReceiveStep and Radio interface

### Features

* enhance RadioReceiveStep and Radio interface ([1bb62f2](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/1bb62f2ec7cffc7cc64c27fe1884c0027a0bf9c0))

## [15.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v14.0.0...v15.0.0) (2025-06-20)


### ⚠ BREAKING CHANGES

* enhance radio interfaces and add new protocol and serial configuration

### Features

* enhance radio interfaces and add new protocol and serial configuration ([ffffac8](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/ffffac87ece50731fc603b2848e4959aa835c561))


### Bug Fixes

* update import path for Radio type in module.ts ([96ac2d3](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/96ac2d38e41855640f01c3e184b7a2cd6de2100c))

## [14.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v13.0.0...v14.0.0) (2025-06-14)


### ⚠ BREAKING CHANGES

* update RadioMemory interface to use Uint8Array for contents

### Features

* update RadioMemory interface to use Uint8Array for contents ([30d026a](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/30d026acb12a7cadab2cfc09dc55c050101c9289))

## [13.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v12.0.1...v13.0.0) (2025-06-14)


### ⚠ BREAKING CHANGES

* go back to semantic-release 23.1.1
* force version bump
* streamline radio memory interfaces and add RadioMemoryConfig

### Features

* force version bump ([e29cb6c](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/e29cb6c4dcc27f73b75b5d3f5184663e89116f4c))
* go back to semantic-release 23.1.1 ([b17a499](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/b17a499911ffe4765df7397723ac10aa4792d681))
* streamline radio memory interfaces and add RadioMemoryConfig ([f5c0a88](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/f5c0a885bc38446953bc8c70ea060fbac09ab48e))

## [12.0.1](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v12.0.0...v12.0.1) (2025-05-10)


### Bug Fixes

* export RadioMemorySegment ([105e1af](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/105e1affad6025f04e9d81bcb83e581564d510e7))

## [12.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v11.0.0...v12.0.0) (2025-05-10)


### ⚠ BREAKING CHANGES

* add RadioMemorySegment and make RadioMemory.contents RadioMemorySegment[]

### Features

* add RadioMemorySegment and make RadioMemory.contents RadioMemorySegment[] ([df0b320](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/df0b32045107b3b743e44be648a0096e05b84035))

## [11.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v10.0.0...v11.0.0) (2025-04-27)


### ⚠ BREAKING CHANGES

* move radio name and manufacturer to RadioId

### Features

* move radio name and manufacturer to RadioId ([d84b729](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/d84b729366858c3972feee873a0a55661c501e00))

## [10.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v9.0.0...v10.0.0) (2025-04-27)


### ⚠ BREAKING CHANGES

* improved Radio API

### Features

* improved Radio API ([7c34422](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/7c34422a8f37ddd01ae6b630eaea5b3d1a815bcb))

## [9.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v8.0.0...v9.0.0) (2025-04-20)


### ⚠ BREAKING CHANGES

* update RadioModel interface to use properties instead of getter methods

### Features

* update RadioModel interface to use properties instead of getter methods ([fe0c930](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/fe0c930ea6da1be01d0ead7bdc217546954fa04f))

## [8.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v7.0.0...v8.0.0) (2025-04-12)


### ⚠ BREAKING CHANGES

* update radio interfaces and remove deprecated radio.ts file

### Features

* update radio interfaces and remove deprecated radio.ts file ([9308ea5](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/9308ea59628363c65a240d9d657e7fc3a5325d33))

## [7.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v6.0.0...v7.0.0) (2025-04-06)


### ⚠ BREAKING CHANGES

* remove radio id from RadioProgram

### Features

* remove radio id from RadioProgram ([6ede16a](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/6ede16a9876b91420db58b08476ca424b21ca30a))

## [6.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v5.0.0...v6.0.0) (2025-04-06)


### ⚠ BREAKING CHANGES

* better tone enums

### Features

* better tone enums ([56f5760](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/56f5760a1cfe369f6bd9f7b97ef3b2ee167aa314))

## [5.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v4.0.0...v5.0.0) (2025-04-06)


### ⚠ BREAKING CHANGES

* id branded types need to be string and not number

### Features

* id branded types need to be string and not number ([3a0b68d](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/3a0b68def4fe84e87ea3dc64a1fa09a8d8143a5c))

## [4.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v3.0.0...v4.0.0) (2025-04-06)


### ⚠ BREAKING CHANGES

* use branded types

### Features

* use branded types ([c6343cc](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/c6343ccd0baea226226ba2daeec882645d638396))


### Bug Fixes

* fix LicenseClassId typo ([2a3b5c6](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/2a3b5c6a9b8c4262bb7ffbbc71f5372c1e5b01fa))
* fix more LicenseClassId typos ([a49e1a7](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/a49e1a798c3e9d4fab2dbbb9759e76cc0cf400f3))

## [3.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v2.0.0...v3.0.0) (2025-03-31)


### ⚠ BREAKING CHANGES

* the RadioConnection should contain model instead of model id

### Features

* the RadioConnection should contain model instead of model id ([d7f8470](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/d7f84709fee55f7e9dd08d582547e6c71887f522))

## [2.0.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v1.1.0...v2.0.0) (2024-12-02)


### ⚠ BREAKING CHANGES

* make ESM

### Features

* make ESM ([93049f0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/93049f0b5d11731a42a752660f4b8b6f9f9a947c))

## [1.1.0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v1.0.1...v1.1.0) (2024-11-30)


### Features

* add RadioCodec API ([632a76c](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/632a76c3fd2dca49331b723b826c9d74851f564c))

## [1.0.1](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/compare/v1.0.0...v1.0.1) (2024-11-24)


### Bug Fixes

* force build ([bc601c0](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/bc601c0470e05fe912cdd712ab7325726fd1fc4d))

## 1.0.0 (2024-11-24)


### Bug Fixes

* add semantic-release and force build ([8343a38](https://gitlab.com/springfield-ham-radio/app/ham-radio-api/commit/8343a387c63a7b87c1e303f47edb0112feb7fcee))
