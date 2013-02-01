'use strict'

/**
 * Creates a function that, when executed, will only call the `func`
 * function at most once per every `wait` milliseconds. If the throttled
 * function is invoked more than once during the `wait` timeout, `func` will
 * also be called on the trailing edge of the timeout. Subsequent calls to the
 * throttled function will return the result of the last `func` call.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to throttle.
 * @param {Number} wait The number of milliseconds to throttle executions to.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * var throttled = _.throttle(updatePosition, 100);
 * jQuery(window).on('scroll', throttled);
 */

function throttle(func, wait) {
    var args, result, thisArg, timeoutId, lastCalled = 0

    function trailingCall() {
        lastCalled = new Date
        timeoutId = null
        result = func.apply(thisArg, args)
    }
    return function() {
        var now = new Date
        var remaining = wait - (now - lastCalled)

        args = arguments
        thisArg = this

        if(remaining <= 0) {
            clearTimeout(timeoutId)
            timeoutId = null
            lastCalled = now
            result = func.apply(thisArg, args)
        } else if(!timeoutId) {
            timeoutId = setTimeout(trailingCall, remaining)
        }
        return result
    };
}

module.exports = throttle