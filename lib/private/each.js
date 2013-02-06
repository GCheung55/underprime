'use strict'

var createIterator = require('./createIterator')
var eachIteratorOptions = require('./eachIteratorOptions')

/**
 * A function compiled to iterate `arguments` objects, arrays, objects, and
 * strings consistenly across environments, executing the `callback` for each
 * element in the `collection`. The `callback` is bound to `thisArg` and invoked
 * with three arguments; (value, index|key, collection). Callbacks may exit
 * iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Array|Object|String} Returns `collection`.
 */
module.exports = createIterator(eachIteratorOptions);
