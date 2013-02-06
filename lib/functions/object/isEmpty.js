'use strict'

var toString = {}.toString
var arrayClass = require('../../toStringClasses/arrayClass')
var stringClass = require('../../toStringClasses/arrayClass')
var argsClass = require('../../toStringClasses/arrayClass')
var noArgsClass = require('../../private/noArgsClass')
var isArguments = require('./isArguments')
var objectClass = require('../../toStringClasses/arrayClass')
var isFunction = require('./isArguments')
var forOwn = require('./forOwn')

/**
 * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
 * length of `0` and objects with no own enumerable properties are considered
 * "empty".
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Array|Object|String} value The value to inspect.
 * @returns {Boolean} Returns `true`, if the `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({});
 * // => true
 *
 * _.isEmpty('');
 * // => true
 */

module.exports = function(value) {
  var result = true
  if(!value) {
    return result
  }
  var className = toString.call(value)
  var length = value.length

  if((className == arrayClass || className == stringClass || className == argsClass || (noArgsClass && isArguments(value))) || (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
    return !length
  }
  forOwn(value, function() {
    return(result = false)
  })
  return result
}
