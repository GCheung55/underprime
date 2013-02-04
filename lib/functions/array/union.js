'use strict'

var uniq = require('./uniq')
var concat = require('../../private/concat')

/**
 * Computes the union of the passed-in arrays using strict equality for
 * comparisons, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} [array1, array2, ...] Arrays to process.
 * @returns {Array} Returns a new array of unique values, in order, that are
 *  present in one or more of the arrays.
 * @example
 *
 * _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
 * // => [1, 2, 3, 101, 10]
 */

function union() {
    return uniq(concat.apply([], arguments));
}

module.exports = union
