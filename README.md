# ham-radio-api

Shared TypeScript types and schemas for HamBench: protocol DSL, memory maps, serial config, branded frequencies, license types, stations, and antennas.

Packages that talk to radios depend on this library. It does not open a serial port.

Docs: [HamBench developer docs](https://springfield-ham-radio.github.io/ham-radio-docs/developer/)

Package docs:

- [radio read/write dialog messages](docs/radio-dialog-messages.md)
- [memory map field UI](docs/memory-map.md)

## License

MIT — Copyright (c) 2026 Bryan Hunt. See [LICENSE](LICENSE).

Development and CI use Node.js 26.13.0 from `.nvmrc`. Official Node.js 26 binaries do not ship Corepack, so install Corepack 0.36.0 (the version vendored in that Node source tree) before enabling it. Yarn stays at 4.18.0.

```bash
npm install -g corepack@0.36.0
corepack enable
yarn install
yarn build
yarn test
```
