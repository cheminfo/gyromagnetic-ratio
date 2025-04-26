# gyromagnetic-ratio

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Reference values for gyromagnetic ratio in $rad \over Ts $ extracted from:
- [Konstantin's gyromagnetic ratio table](https://www.kherb.io/docs/nmr_table.html) with is based on:
- [CODATA recommended values of the fundamental physical constants: 2018*](https://doi.org/10.1103/RevModPhys.93.025010).

## Installation

`$ npm i gyromagnetic-ratio`

## Usage

```js
import { gyromagneticRatio } from 'gyromagnetic-ratio';

const proton = gyromagneticRatio['1H'];

console.log(proton);
// 267522188.05267358
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/gyromagnetic-ratio.svg
[npm-url]: https://www.npmjs.com/package/gyromagnetic-ratio
[ci-image]: https://github.com/cheminfo/gyromagnetic-ratio/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/cheminfo/gyromagnetic-ratio/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/gyromagnetic-ratio.svg
[codecov-url]: https://codecov.io/gh/cheminfo/gyromagnetic-ratio
[download-image]: https://img.shields.io/npm/dm/gyromagnetic-ratio.svg
[download-url]: https://www.npmjs.com/package/gyromagnetic-ratio
