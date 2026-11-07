#!/bin/sh
set -eu

cd "$(dirname "$0")"

# Node.js 26 binaries do not bundle Corepack. 0.36.0 matches the copy vendored in the Node.js 26.13.0 source tree.
npm install -g corepack@0.36.0
corepack enable

yarn install
yarn prepare

