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
