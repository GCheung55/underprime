'use strict'

var toString = {}.toString
var argsClass = require('../../toStringClasses/argsClass')
var noArgsClass = require('../../detect/noArgsClass')
var hasOwnProperty = require('../../util/hasOwnProperty')

/**
 * Checks if `value` is an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is an `arguments` object, else `false`.
 * @example
 *
 * (function() { return _.isArguments(arguments); })(1, 2, 3);
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = noArgsClass ?
// fallback for browsers that can't detect `arguments` objects by [[Class]]
function(value) {
    return value ? hasOwnProperty.call(value, 'callee') : false
} : function(value) {
    return toString.call(value) == argsClass
}

module.exports = isArguments