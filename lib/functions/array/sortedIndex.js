'use strict'

var createCallback = require('../../private/createCallback')
var identity = require('../utility/identity')

/**
 * Uses a binary search to determine the smallest index at which the `value`
 * should be inserted into `array` in order to maintain the sort order of the
 * sorted `array`. If `callback` is passed, it will be executed for `value` and
 * each element in `array` to compute their sort ranking. The `callback` is
 * bound to `thisArg` and invoked with one argument; (value). The `callback`
 * argument may also be the name of a property to order by.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to iterate over.
 * @param {Mixed} value The value to evaluate.
 * @param {Function|String} [callback=identity|property] The function called
 *  per iteration or property name to order by.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Number} Returns the index at which the value should be inserted
 *  into `array`.
 * @example
 *
 * _.sortedIndex([20, 30, 50], 40);
 * // => 2
 *
 * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
 * // => 2
 *
 * var dict = {
 *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
 * };
 *
 * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
 *   return dict.wordToNumber[word];
 * });
 * // => 2
 *
 * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
 *   return this.wordToNumber[word];
 * }, dict);
 * // => 2
 */

function sortedIndex(array, value, callback, thisArg) {
    var low = 0
    var high = array ? array.length : low

    // explicitly reference `identity` for better inlining in Firefox
    callback = callback ? createCallback(callback, thisArg) : identity
    value = callback(value)

    while(low < high) {
        var mid = (low + high) >>> 1
        callback(array[mid]) < value ? low = mid + 1 : high = mid
    }
    return low
}

module.exports = sortedIndex