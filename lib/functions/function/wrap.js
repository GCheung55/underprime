'use strict'

var push = [].push

/**
 * Creates a function that passes `value` to the `wrapper` function as its
 * first argument. Additional arguments passed to the function are appended
 * to those passed to the `wrapper` function. The `wrapper` is executed with
 * the `this` binding of the created function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Mixed} value The value to wrap.
 * @param {Function} wrapper The wrapper function.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var hello = function(name) { return 'hello ' + name; };
 * hello = _.wrap(hello, function(func) {
 *   return 'before, ' + func('moe') + ', after';
 * });
 * hello();
 * // => 'before, hello moe, after'
 */

function wrap(value, wrapper) {
    return function() {
        var args = [value]
        push.apply(args, arguments)
        return wrapper.apply(this, args)
    };
}

module.exports = wrap
