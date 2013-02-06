'use strict'

var slice = require('../../private/slice')

/**
 * Defers executing the `func` function until the current call stack has cleared.
 * Additional arguments will be passed to `func` when it is invoked.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to defer.
 * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
 * @returns {Number} Returns the `setTimeout` timeout id.
 * @example
 *
 * _.defer(function() { alert('deferred'); });
 * // returns from the function before `alert` is called
 */

module.exports = function(func) {
    var args = slice(arguments, 1)
    return setTimeout(function() {
        func.apply(undefined, args)
    }, 1)
}
