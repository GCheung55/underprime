'use strict'

var createIterator = require('../../util/createIterator')
var eachIteratorOptions = require('../../util/eachIteratorOptions')
var forOwnIteratorOptions = require('../../util/forOwnIteratorOptions')

/**
 * Iterates over an object's own enumerable properties, executing the `callback`
 * for each property. The `callback` is bound to `thisArg` and invoked with three
 * arguments; (value, key, object). Callbacks may exit iteration early by explicitly
 * returning `false`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
 *   alert(key);
 * });
 * // => alerts '0', '1', and 'length' (order is not guaranteed)
 */
var forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions)

module.exports = forOwn
