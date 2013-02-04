'use strict'

var createBound = require('../../private/createBound')
var slice = require('../../private/slice')

/**
 * Creates a function that, when called, invokes `func` with any additional
 * `partial` arguments prepended to those passed to the new function. This
 * method is similar to `_.bind`, except it does **not** alter the `this` binding.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to partially apply arguments to.
 * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * var greet = function(greeting, name) { return greeting + ': ' + name; };
 * var hi = _.partial(greet, 'hi');
 * hi('moe');
 * // => 'hi: moe'
 */

function partial(func) {
    return createBound(func, slice(arguments, 1))
}

module.exports = partial
