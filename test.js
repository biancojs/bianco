require('jsdom-global')()
const assert = require('assert')
const { $ } = require('./')
const body = document.body

describe('Bianco', function() {
  beforeEach(function() {
    const div = document.createElement('div')
    div.innerHTML = `
      <h1>bianco!!!</h1>
    `
    body.appendChild(div)
  })

  // all the bianco helpers are already tested in their own repos
  it('Silence is golden', function() {
    const h1 = $('h1')[0]
    assert.equal(h1.innerHTML, 'bianco!!!')
  })
})