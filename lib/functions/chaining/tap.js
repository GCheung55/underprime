'use strict'

/**
 * Invokes `interceptor` with the `value` as the first argument, and then
 * returns `value`. The purpose of this method is to "tap into" a method chain,
 * in order to perform operations on intermediate results within the chain.
 *
 * @static
 * @memberOf _
 * @category Chaining
 * @param {Mixed} value The value to pass to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {Mixed} Returns `value`.
 * @example
 *
 * _([1, 2, 3, 4])
 *  .filter(function(num) { return num % 2 == 0; })
 *  .tap(alert)
 *  .map(function(num) { return num * num; })
 *  .value();
 * // => // [2, 4] (alerted)
 * // => [4, 16]
 */

module.exports = function(value, interceptor) {
    interceptor(value)
    return value
}
