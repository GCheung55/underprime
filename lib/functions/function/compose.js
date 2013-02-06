'use strict'

/**
 * Creates a function that is the composition of the passed functions,
 * where each function consumes the return value of the function that follows.
 * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
 * Each function is executed with the `this` binding of the composed function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} [func1, func2, ...] Functions to compose.
 * @returns {Function} Returns the new composed function.
 * @example
 *
 * var greet = function(name) { return 'hi: ' + name; };
 * var exclaim = function(statement) { return statement + '!'; };
 * var welcome = _.compose(exclaim, greet);
 * welcome('moe');
 * // => 'hi: moe!'
 */

module.exports = function() {
    var funcs = arguments
    return function() {
        var args = arguments
        var length = funcs.length

        while(length--) {
            args = [funcs[length].apply(this, args)]
        }
        return args[0]
    };
}
