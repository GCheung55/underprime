'use strict'

/**
 * Creates a function that is restricted to execute `func` once. Repeat calls to
 * the function will return the value of the first call. The `func` is executed
 * with the `this` binding of the created function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // `initialize` executes `createApplication` once
 */

module.exports = function(func) {
    var ran, result

    return function() {
        if(ran) {
            return result
        }
        ran = true
        result = func.apply(this, arguments)

        // clear the `func` variable so the function may be garbage collected
        func = null
        return result
    };
}
