'use strict'

var ctor = require('./ctor')
var propertyIsEnumerable = {}.propertyIsEnumerable

/**
 * Detect if a `prototype` properties are enumerable by default:
 *
 * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
 * (if the prototype or a property on the prototype has been set)
 * incorrectly sets a function's `prototype` property [[Enumerable]]
 * value to `true`.
 */

module.exports = propertyIsEnumerable.call(ctor, 'prototype')