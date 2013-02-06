'use strict'

var isBindFast = require('../../private/isBindFast')
var nativeBind = require('../../private/nativeBind')
var createBound = require('../../private/createBound')
var slice = require('../../private/slice')

/**
 * Creates a function that, when called, invokes `func` with the `this`
 * binding of `thisArg` and prepends any additional `bind` arguments to those
 * passed to the bound function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to bind.
 * @param {Mixed} [thisArg] The `this` binding of `func`.
 * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var func = function(greeting) {
 *   return greeting + ' ' + this.name;
 * };
 *
 * func = _.bind(func, { 'name': 'moe' }, 'hi');
 * func();
 * // => 'hi moe'
 */

module.exports = function(func, thisArg) {
    // use `Function#bind` if it exists and is fast
    // (in V8 `Function#bind` is slower except when partially applied)
    return isBindFast || (nativeBind && arguments.length > 2) ? nativeBind.call.apply(nativeBind, arguments) : createBound(func, thisArg, slice(arguments, 2))
}
