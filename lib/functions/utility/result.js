'use strict'

var isFunction = require('../object/isFunction')

/**
 * Resolves the value of `property` on `object`. If `property` is a function,
 * it will be invoked and its result returned, else the property value is
 * returned. If `object` is falsey, then `null` is returned.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {Object} object The object to inspect.
 * @param {String} property The property to get the value of.
 * @returns {Mixed} Returns the resolved value.
 * @example
 *
 * var object = {
 *   'cheese': 'crumpets',
 *   'stuff': function() {
 *     return 'nonsense';
 *   }
 * };
 *
 * _.result(object, 'cheese');
 * // => 'crumpets'
 *
 * _.result(object, 'stuff');
 * // => 'nonsense'
 */

module.exports = function(object, property) {
    // based on Backbone's private `getValue` function
    // https://github.com/documentcloud/backbone/blob/0.9.2/backbone.js#L1419-1424
    var value = object ? object[property] : null
    return isFunction(value) ? object[property]() : value
}
