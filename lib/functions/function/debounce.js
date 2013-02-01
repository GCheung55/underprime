'use strict'

/**
 * Creates a function that will delay the execution of `func` until after
 * `wait` milliseconds have elapsed since the last time it was invoked. Pass
 * `true` for `immediate` to cause debounce to invoke `func` on the leading,
 * instead of the trailing, edge of the `wait` timeout. Subsequent calls to
 * the debounced function will return the result of the last `func` call.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to debounce.
 * @param {Number} wait The number of milliseconds to delay.
 * @param {Boolean} immediate A flag to indicate execution is on the leading
 *  edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * var lazyLayout = _.debounce(calculateLayout, 300);
 * jQuery(window).on('resize', lazyLayout);
 */

function debounce(func, wait, immediate) {
    var args, result, thisArg, timeoutId

    function delayed() {
        timeoutId = null
        if(!immediate) {
            result = func.apply(thisArg, args)
        }
    }
    return function() {
        var isImmediate = immediate && !timeoutId
        args = arguments
        thisArg = this

        clearTimeout(timeoutId)
        timeoutId = setTimeout(delayed, wait)

        if(isImmediate) {
            result = func.apply(thisArg, args)
        }
        return result
    };
}

module.exports = debounce