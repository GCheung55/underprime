'use strict'

var nativeKeys = require('../../private/nativeKeys')
var shimKeys = require('../../private/shimKeys')
var hasEnumPrototype = require('../../private/hasEnumPrototype')
var propertyIsEnumerable = {}.propertyIsEnumerable
var isObject = require('./isObject')

/**
 * Creates an array composed of the own enumerable property names of `object`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns a new array of property names.
 * @example
 *
 * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
 * // => ['one', 'two', 'three'] (order is not guaranteed)
 */
var keys = !nativeKeys ? shimKeys : function(object) {
    // avoid iterating over the `prototype` property
    return hasEnumPrototype && typeof object == 'function' && propertyIsEnumerable.call(object, 'prototype') ? shimKeys(object) : (isObject(object) ? nativeKeys(object) : [])
};

module.exports = keys