"use strict"

// var toString = {}.toString
// var funcClass = require('../../toStringClasses/funcClass')

/**
 * Checks if `value` is a function.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 */

// function isFunction(value) {
//     return typeof value == 'function';
// }
// fallback for older versions of Chrome and Safari
// if(isFunction(/x/)) {
//     isFunction = function(value) {
//         return value instanceof Function || toString.call(value) == funcClass
//     }
// }

// module.exports = isFunction

var typeOf = require('prime/type')

module.exports = function(value){
    return typeOf(value) == 'function'
}