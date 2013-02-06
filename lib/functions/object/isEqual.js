'use strict'

var createCallback = require('../../private/createCallback')
var toString = {}.toString
var argsClass = require('../../toStringClasses/argsClass')
var objectClass = require('../../toStringClasses/objectClass')
var boolClass = require('../../toStringClasses/boolClass')
var dateClass = require('../../toStringClasses/dateClass')
var numberClass = require('../../toStringClasses/numberClass')
var regexpClass = require('../../toStringClasses/regexpClass')
var stringClass = require('../../toStringClasses/stringClass')
var arrayClass = require('../../toStringClasses/arrayClass')
var noNodeClass = require('../../private/noNodeClass')
var isNode = require('../../private/isNode')
var argsAreObjects = require('../../private/argsAreObjects')
var isArguments = require('./isArguments')
var isFunction = require('./isFunction')
var indicatorObject = {}
var forIn = require('./forIn')
var hasOwnProperty = require('../../private/hasOwnProperty')

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent to each other. If `callback` is passed, it will be executed to
 * compare values. If `callback` returns a non-boolean value, comparisons will
 * be handled by the method instead. The `callback` is bound to `thisArg` and
 * invoked with two arguments; (a, b).
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} a The value to compare.
 * @param {Mixed} b The other value to compare.
 * @param {Function} [callback] The function to customize comparing values.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @param- {Object} [whereIndicator] Internally used to indicate that when
 *  comparing objects, `a` has at least the properties of `b`.
 * @param- {Object} [stackA=[]] Internally used track traversed `a` objects.
 * @param- {Object} [stackB=[]] Internally used track traversed `b` objects.
 * @returns {Boolean} Returns `true`, if the values are equvalent, else `false`.
 * @example
 *
 * var moe = { 'name': 'moe', 'age': 40 };
 * var copy = { 'name': 'moe', 'age': 40 };
 *
 * moe == copy;
 * // => false
 *
 * _.isEqual(moe, copy);
 * // => true
 *
 * var words = ['hello', 'goodbye'];
 * var otherWords = ['hi', 'goodbye'];
 *
 * _.isEqual(words, otherWords, function(a, b) {
 *   var reGreet = /^(?:hello|hi)$/i,
 *       aGreet = _.isString(a) && reGreet.test(a),
 *       bGreet = _.isString(b) && reGreet.test(b);
 *
 *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
 * });
 * // => true
 */

var isEqual = module.exports = function(a, b, callback, thisArg, whereIndicator, stackA, stackB) {
    if(callback) {
        callback = typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg, 2)
        var result = callback(a, b)
        if(typeof result == 'boolean') {
            return result
        }
    }
    // exit early for identical values
    if(a === b) {
        // treat `+0` vs. `-0` as not equal
        return a !== 0 || (1 / a == 1 / b)
    }
    var type = typeof a
    var otherType = typeof b

    // exit early for unlike primitive values
    if(a === a && (!a || (type != 'function' && type != 'object')) && (!b || (otherType != 'function' && otherType != 'object'))) {
        return false
    }
    // compare [[Class]] names
    var className = toString.call(a)
    var otherClass = toString.call(b)

    if(className == argsClass) {
        className = objectClass
    }
    if(otherClass == argsClass) {
        otherClass = objectClass
    }
    if(className != otherClass) {
        return false
    }
    switch(className) {
    case boolClass:
    case dateClass:
        // coerce dates and booleans to numbers, dates to milliseconds and booleans
        // to `1` or `0`, treating invalid dates coerced to `NaN` as not equal
        return +a == +b

    case numberClass:
        // treat `NaN` vs. `NaN` as equal
        return a != +a ? b != +b
        // but treat `+0` vs. `-0` as not equal
        :
        (a == 0 ? (1 / a == 1 / b) : a == +b)

    case regexpClass:
    case stringClass:
        // coerce regexes to strings (http://es5.github.com/#x15.10.6.4)
        // treat string primitives and their corresponding object instances as equal
        return a == b + ''
    }
    var isArr = className == arrayClass
    if(!isArr) {
        // unwrap any `lodash` wrapped values
        if(a.__wrapped__ || b.__wrapped__) {
            return isEqual(a.__wrapped__ || a, b.__wrapped__ || b, callback, undefined, whereIndicator, stackA, stackB)
        }
        // exit for functions and DOM nodes
        if(className != objectClass || (noNodeClass && (isNode(a) || isNode(b)))) {
            return false
        }
        // in older versions of Opera, `arguments` objects have `Array` constructors
        var ctorA = !argsAreObjects && isArguments(a) ? Object : a.constructor
        var ctorB = !argsAreObjects && isArguments(b) ? Object : b.constructor

        // non `Object` object instances with different constructors are not equal
        if(ctorA != ctorB && !(
        isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB)) {
            return false
        }
    }
    // assume cyclic structures are equal
    // the algorithm for detecting cyclic structures is adapted from ES 5.1
    // section 15.12.3, abstract operation `JO` (http://es5.github.com/#x15.12.3)
    stackA || (stackA = [])
    stackB || (stackB = [])

    var length = stackA.length
    while(length--) {
        if(stackA[length] == a) {
            return stackB[length] == b
        }
    }
    var size = 0
    result = true

    // add `a` and `b` to the stack of traversed objects
    stackA.push(a)
    stackB.push(b)

    // recursively compare objects and arrays (susceptible to call stack limits)
    if(isArr) {
        // compare lengths to determine if a deep comparison is necessary
        size = b.length
        result = whereIndicator == indicatorObject || size == a.length

        if(result) {
            // deep compare the contents, ignoring non-numeric properties
            while(size--) {
                if(!(result = isEqual(a[size], b[size], callback, undefined, whereIndicator, stackA, stackB))) {
                    break
                }
            }
        }
        return result
    }
    // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
    // which, in this case, is more costly
    forIn(b, function(value, key, b) {
        if(hasOwnProperty.call(b, key)) {
            // count the number of properties.
            size++
            // deep compare each property value.
            return(result = hasOwnProperty.call(a, key) && isEqual(a[key], value, callback, undefined, whereIndicator, stackA, stackB))
        }
    });

    if(result && whereIndicator != indicatorObject) {
        // ensure both objects have the same number of properties
        forIn(a, function(value, key, a) {
            if(hasOwnProperty.call(a, key)) {
                // `size` will be `-1` if `a` has more properties than `b`
                return(result = --size > -1)
            }
        })
    }
    return result
}
