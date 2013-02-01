'use strict'

var slice = require('../../util/slice')

/**
 * Executes the `func` function after `wait` milliseconds. Additional arguments
 * will be passed to `func` when it is invoked.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to delay.
 * @param {Number} wait The number of milliseconds to delay execution.
 * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
 * @returns {Number} Returns the `setTimeout` timeout id.
 * @example
 *
 * var log = _.bind(console.log, console);
 * _.delay(log, 1000, 'logged later');
 * // => 'logged later' (Appears after one second.)
 */

function delay(func, wait) {
    var args = slice(arguments, 2)
    return setTimeout(function() {
        func.apply(undefined, args)
    }, wait)
}

module.exports = delay