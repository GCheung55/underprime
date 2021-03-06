'use strict'

var createIterator = require('../../private/createIterator')
var eachIteratorOptions = require('../../private/eachIteratorOptions')
var forOwnIteratorOptions = require('../../private/forOwnIteratorOptions')

/**
 * Iterates over `object`'s own and inherited enumerable properties, executing
 * the `callback` for each property. The `callback` is bound to `thisArg` and
 * invoked with three arguments; (value, key, object). Callbacks may exit iteration
 * early by explicitly returning `false`.
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
 * function Dog(name) {
 *   this.name = name;
 * }
 *
 * Dog.prototype.bark = function() {
 *   alert('Woof, woof!');
 * };
 *
 * _.forIn(new Dog('Dagny'), function(value, key) {
 *   alert(key);
 * });
 * // => alerts 'name' and 'bark' (order is not guaranteed)
 */
module.exports = createIterator(eachIteratorOptions, forOwnIteratorOptions, {
    'useHas': false
})
