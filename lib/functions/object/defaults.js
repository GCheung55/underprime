'use strict'

var createIterator = require('../../util/createIterator')
var assignIteratorOptions = require('../../util/assignIteratorOptions')

/**
 * Assigns own enumerable properties of source object(s) to the `destination`
 * object for all `destination` properties that resolve to `null`/`undefined`.
 * Once a property is set, additional defaults of the same property will be
 * ignored.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The destination object.
 * @param {Object} [source1, source2, ...] The source objects.
 * @param- {Object} [guard] Internally used to allow working with `_.reduce`
 *  without using its callback's `key` and `object` arguments as sources.
 * @returns {Object} Returns the destination object.
 * @example
 *
 * var iceCream = { 'flavor': 'chocolate' };
 * _.defaults(iceCream, { 'flavor': 'vanilla', 'sprinkles': 'rainbow' });
 * // => { 'flavor': 'chocolate', 'sprinkles': 'rainbow' }
 */
var defaults = createIterator(assignIteratorOptions, {
    'loop': 'if (result[index] == null) ' + assignIteratorOptions.loop
})

module.exports = defaults
