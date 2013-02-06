'use strict'

var createIterator = require('../../private/createIterator')
var assignIteratorOptions = require('../../private/assignIteratorOptions')

/**
 * Assigns own enumerable properties of source object(s) to the `destination`
 * object. Subsequent sources will overwrite propery assignments of previous
 * sources.
 *
 * @static
 * @memberOf _
 * @alias extend
 * @category Objects
 * @param {Object} object The destination object.
 * @param {Object} [source1, source2, ...] The source objects.
 * @param- {Object} [guard] Internally used to allow working with `_.reduce`
 *  without using its callback's `key and `object` arguments as sources.
 * @returns {Object} Returns the destination object.
 * @example
 *
 * _.assign({ 'name': 'moe' }, { 'age': 40 });
 * // => { 'name': 'moe', 'age': 40 }
 */
module.exports = createIterator(assignIteratorOptions)
