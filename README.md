# Find Artikel

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![npm package](https://img.shields.io/npm/v/find-artikel.svg)](https://www.npmjs.org/package/find-artikel) [![downloads](https://img.shields.io/npm/dt/find-artikel.svg)](https://www.npmjs.com/package/find-artikel) [![size](https://img.shields.io/bundlephobia/minzip/find-artikel)](https://www.npmjs.com/package/find-artikel)

> A library and CLI tool which uses [Yandex Dictionary API](https://yandex.com/dev/dictionary/) to find the **artikels** of German words.

<img src="https://raw.githubusercontent.com/kaangokdemir/find-artikel/master/static/logo.png" width="200" height="200">

## CLI

```bash
npm i -g find-artikel

find-artikel apfel # "der"
```

## Library

```javascript
const { findArtikel } = require('find-artikel')

findArtikel('schlange').then((res) => {
  console.log(res) // "die"
})
```

## Contributing

Please check [CONTRIBUTING.md](https://raw.githubusercontent.com/kaangokdemir/find-artikel/master/CONTRIBUTING.md)

## TODO

- Improve Documentation
- Add Unit Tests
- Add ESLint
- Migrate to TypeScript

## Contributors

Kaan Gökdemir - Author ([@kaangokdemir](https://linkedin.com/kaan-gokdemir)) - [kaangokdemir.com](https://kaangokdemir.com)

## License

[MIT](https://opensource.org/licenses/MIT)
