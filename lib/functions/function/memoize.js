'use strict'

var hasOwnProperty = require('../../util/hasOwnProperty')

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * passed, it will be used to determine the cache key for storing the result
 * based on the arguments passed to the memoized function. By default, the first
 * argument passed to the memoized function is used as the cache key. The `func`
 * is executed with the `this` binding of the memoized function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] A function used to resolve the cache key.
 * @returns {Function} Returns the new memoizing function.
 * @example
 *
 * var fibonacci = _.memoize(function(n) {
 *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
 * });
 */

function memoize(func, resolver) {
    var cache = {}
    return function() {
        var key = (resolver ? resolver.apply(this, arguments) : arguments[0]) + ''
        return hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = func.apply(this, arguments))
    };
}

module.exports = memoize