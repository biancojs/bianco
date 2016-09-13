(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.bianco = global.bianco || {})));
}(this, (function (exports) { 'use strict';

/**
 * Split a string into several items separed by spaces
 * @param   { String } list - events list
 * @returns { Array } all the events detected
 */
const split = list => list.split(/\s/)

/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement } el     - DOM node where the listeners will be bound
 * @param   { String }      evList - list of events we want to bind or unbind space separated
 * @param   { Function }    cb     - listeners callback
 * @param   { String }      method - either 'addEventListener' or 'removeEventListener'
 */
function manageEvents(el, evList, cb, method) {
  split(evList).forEach((e) => {
    el[method](e, cb, false)
  })
}

/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement } el     - DOM node where the listeners will be bound
 * @param   { String }      evList - list of events we want to bind space separated
 * @param   { Function }    cb     - listeners callback
 * @returns { HTMLElement } DOM node and first argument of the function
 */
function add(el, evList, cb) {
  manageEvents(el, evList, cb, 'addEventListener')
  return el
}

/**
 * Set a listener using from a list of events triggering the callback only once
 * @param   { HTMLElement } el     - DOM node where the listeners will be bound
 * @param   { String }      evList - list of events we want to bind space separated
 * @param   { Function }    cb     - listeners callback
 * @returns { HTMLElement } DOM node and first argument of the function
 */
function once(el, evList, cb) {
  var handleEvent = function() {
    cb.apply(el, [el, evList, handleEvent])
    remove(el, evList, handleEvent)
  }

  manageEvents(el, evList, handleEvent, 'addEventListener')
  return el
}

/**
 * Remove all the listeners for the events received separated by spaces
 * @param   { HTMLElement } el     - DOM node where the events will be unbind
 * @param   { String }      evList - list of events we want unbind space separated
 * @param   { Function }    cb     - listeners callback
 * @returns { HTMLElement } DOM node and first argument of the function
 */
function remove(el, evList, cb) {
  manageEvents(el, evList, cb, 'removeEventListener')
  return el
}

/**
 * Simple helper to find DOM nodes returning them as Array
 * @param   { String|DOMNodeList } selector - either the query or the DOM nodes to arraify
 * @param   { HTMLElement }        ctx      - context defining where the query will search DOM nodes
 * @returns { Array } DOM nodes in an array
 */
function $(selector, ctx) {
  var els = selector

  // find the DOM nodes
  if (typeof selector === 'string')
    els = (ctx || document).querySelectorAll(selector)


  // arraify the DOM nodes found
  if (!Array.isArray(els))
    els = Array.from(els)

  return els
}

exports.add = add;
exports.remove = remove;
exports.once = once;
exports.query = $;

Object.defineProperty(exports, '__esModule', { value: true });

})));