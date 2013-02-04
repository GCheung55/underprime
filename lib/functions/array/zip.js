'use strict'

var max = require('../collection/max')
var pluck = require('./pluck')

/**
 * Groups the elements of each array at their corresponding indexes. Useful for
 * separate data sources that are coordinated through matching array indexes.
 * For a matrix of nested arrays, `_.zip.apply(...)` can transpose the matrix
 * in a similar fashion.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} [array1, array2, ...] Arrays to process.
 * @returns {Array} Returns a new array of grouped elements.
 * @example
 *
 * _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
 * // => [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]
 */

function zip(array) {
    var index = -1,
        length = array ? max(pluck(arguments, 'length')) : 0,
        result = Array(length);

    while(++index < length) {
        result[index] = pluck(arguments, index);
    }
    return result;
}

module.exports = zip
