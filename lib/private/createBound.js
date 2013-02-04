"use strict"

var isFunction = require('../functions/object/isFunction')
var isObject = require('../functions/object/isObject')
var slice = require('./slice')
var noop = require('./noop')

/**
 * Creates a function that, when called, invokes `func` with the `this` binding
 * of `thisArg` and prepends any `partialArgs` to the arguments passed to the
 * bound function.
 *
 * @private
 * @param {Function|String} func The function to bind or the method name.
 * @param {Mixed} [thisArg] The `this` binding of `func`.
 * @param {Array} partialArgs An array of arguments to be partially applied.
 * @param {Object} [right] Used to indicate partially applying arguments from the right.
 * @returns {Function} Returns the new bound function.
 */

function createBound(func, thisArg, partialArgs, right) {
    var isFunc = isFunction(func)
    var isPartial = !partialArgs
    var key = thisArg

    // juggle arguments
    if(isPartial) {
        partialArgs = thisArg
    }
    if(!isFunc) {
        thisArg = func
    }

    function bound() {
        // `Function#bind` spec
        // http://es5.github.com/#x15.3.4.5
        var args = arguments
        var thisBinding = isPartial ? this : thisArg

        if(!isFunc) {
            func = thisArg[key]
        }
        if(partialArgs.length) {
            args = args.length ? (args = slice(args), right ? args.concat(partialArgs) : partialArgs.concat(args)) : partialArgs
        }
        if(this instanceof bound) {
            // ensure `new bound` is an instance of `bound` and `func`
            noop.prototype = func.prototype
            thisBinding = new noop
            noop.prototype = null

            // mimic the constructor's `return` behavior
            // http://es5.github.com/#x13.2.2
            var result = func.apply(thisBinding, args)
            return isObject(result) ? result : thisBinding
        }
        return func.apply(thisBinding, args)
    }
    return bound
}

module.exports = createBound