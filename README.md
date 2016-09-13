# bianco

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

__Bianco__ is a _modern_ DOM helpers _micro library_

# Why the hell?

Bianco is on the top of the following main concepts that I was not able to find
in any similar framework so far:

- built in __es2015__ for __es2015__ projects
- coded with __standards__ targeting only __modern browsers__
- __modularity__, any bianco helper can be used alone without installing the whole framework
- __size matters__, any helper method tries to accomplish a specific functionality with the minimal amount of code
- optimized for tree shacking and for build tools like [rollup](https://github.com/rollup/rollup)
- readability & simplicity & elegance of the source code

## Usage

```js
import { $ } from 'bianco'
// or also
import $ from 'bianco-query'

const coolDivs = $('div').filter(d => d.classList.contains('cool'))
```

## API

Bianco is build out on the top of many micro DOM helpers.
It's strongly recommended to install only the modules you really need

- DOM queries [bianco-query](https://github.com/GianlucaGuarini/bianco-query#api)
- DOM events [bianco-events](https://github.com/GianlucaGuarini/bianco-events#api)

[travis-image]:https://img.shields.io/travis/GianlucaGuarini/bianco.svg?style=flat-square
[travis-url]:https://travis-ci.org/GianlucaGuarini/bianco

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt

[npm-version-image]:http://img.shields.io/npm/v/bianco.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/bianco.svg?style=flat-square
[npm-url]:https://npmjs.org/package/bianco