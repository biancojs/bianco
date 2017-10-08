/**
 * @module bianco
 */

// selector
export { default as $ } from 'bianco.query'

// events helpers
export {
  add as addEvent,
  remove as removeEvent,
  once as onceEvent
} from 'bianco.events'

// css helpers
export {
  get as getCss,
  set as setCss,
  remove as removeCss
} from 'bianco.css'

// image helpers
export {
  loadImage,
  loadImages
} from 'bianco.images-loader'

// attributes helpers
export {
  get as getAttr,
  set as setAttr,
  remove as removeAttr,
  has as hasAttr
} from 'bianco.attr'