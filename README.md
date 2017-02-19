![Logo bianco](logo-bianco.png)

-
[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

__Bianco__ is a _modern_ DOM helpers _micro library_

[work in progress... come back soon!]

# Why the hell?

Bianco is designed on the following main concepts that I was not able to find
in any similar framework so far:

- built in __es2015__ for __es2015__ projects
- coded with __standards__ targeting only __modern browsers__
- __modularity__, bianco is totally designed in modules. Any bianco helper can be used alone without installing the whole framework
- __functional__, in bianco we use only pure functions to let you build your software combining them however you want
- __size matters__, any helper method tries to accomplish a specific functionality with the minimal amount of code
- optimized for tree shacking and for build tools like [rollup](https://github.com/rollup/rollup)
- readability & simplicity & elegance of the source code

## Usage

```js
import { $ } from 'bianco'
// or also
import $ from 'bianco.query'

const coolDivs = $('div').filter(d => d.classList.contains('cool'))
```

## API

Bianco is build out on the top of many micro DOM helpers.<br>
It's strongly recommended to install only the modules you really need

- [bianco.query](https://github.com/biancojs/query#api) DOM queries
- [bianco.events](https://github.com/biancojs/events#api) DOM events
- [bianco.images-loader](https://github.com/biancojs/images-loader#api) Load images using promises
- [bianco.attr](https://github.com/biancojs/attr#api) DOM attributes
- [bianco.dom-to-array](https://github.com/biancojs/dom-to-array#api) Convert any DOM node/s into arrays

## TODO

List of the bianco modules to create:

- [x] bianco.events
- [x] bianco.query
- [x] bianco.dom-to-array
- [x] bianco.images-loader
- [ ] bianco.monad or bianco.chain?
- [ ] bianco.viewport
- [ ] bianco.pointer
- [ ] ~~bianco.template~~ (why? use es6 template strings instead!)
- [ ] ~~bianco.ajax~~ (naa.. explain why `fetch` is better)
- [ ] bianco.css
- [x] bianco.attr
- [ ] ~~bianco.animate~~ (maybe? Or it's better to use just one of the other 1000 libs?)

[travis-image]:https://img.shields.io/travis/biancojs/bianco.svg?style=flat-square
[travis-url]:https://travis-ci.org/biancojs/bianco

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt

[npm-version-image]:http://img.shields.io/npm/v/bianco.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/bianco.svg?style=flat-square
[npm-url]:https://npmjs.org/package/bianco
