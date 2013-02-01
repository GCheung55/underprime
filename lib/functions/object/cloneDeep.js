'use strict'

var clone = require('./clone')

/**
 * Creates a deep clone of `value`. If a `callback` function is passed, it will
 * be executed to produce the cloned values. If `callback` returns the value it
 * was passed, cloning will be handled by the method instead. The `callback` is
 * bound to `thisArg` and invoked with one argument; (value).
 *
 * Note: This function is loosely based on the structured clone algorithm. Functions
 * and DOM nodes are **not** cloned. The enumerable properties of `arguments` objects and
 * objects created by constructors other than `Object` are cloned to plain `Object` objects.
 * See http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to deep clone.
 * @param {Function} [callback] The function to customize cloning values.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Mixed} Returns the deep cloned `value`.
 * @example
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 }
 * ];
 *
 * var deep = _.cloneDeep(stooges);
 * deep[0] === stooges[0];
 * // => false
 *
 * var view = {
 *   'id': 'docs',
 *   'node': element
 * };
 *
 * var clone = _.cloneDeep(view, function(value) {
 *   return _.isElement(value) ? value.cloneNode(true) : value;
 * });
 *
 * clone.node == view.node;
 * // => false
 */

function cloneDeep(value, callback, thisArg) {
    return clone(value, true, callback, thisArg)
}

module.exports = cloneDeep
