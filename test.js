require('jsdom-global')()
const assert = require('assert')
const { $ } = require('./')

function setup() {
  var div = document.createElement('div')
  div.innerHTML = `
    <div>bianco!!!</div>
  `
  document.body.appendChild(div)
}


setup()

const div = $('div')

assert.equal(div.length, 1)
