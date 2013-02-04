'use strict'

var isObject = require('./isObject')
var indicatorObject = {}
var createCallback = require('../../private/createCallback')
var isArray = require('./isArray')
var forEach = require('../collection/forEach')
var forOwn = require('./forOwn')
var isPlainObject = require('./isPlainObject')

/**
 * Recursively merges own enumerable properties of the source object(s), that
 * don't resolve to `undefined`, into the `destination` object. Subsequent sources
 * will overwrite propery assignments of previous sources. If a `callback` function
 * is passed, it will be executed to produce the merged values of the destination
 * and source properties. The `callback` is bound to `thisArg` and invoked with
 * two arguments; (objectValue, sourceValue).
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The destination object.
 * @param {Object} [source1, source2, ...] The source objects.
 * @param {Function} [callback] The function to customize merging properties.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @param- {Object} [deepIndicator] Internally used to indicate that `stackA`
 *  and `stackB` are arrays of traversed objects instead of source objects.
 * @param- {Array} [stackA=[]] Internally used to track traversed source objects.
 * @param- {Array} [stackB=[]] Internally used to associate values with their
 *  source counterparts.
 * @returns {Object} Returns the destination object.
 * @example
 *
 * var names = {
 *   'stooges': [
 *     { 'name': 'moe' },
 *     { 'name': 'larry' }
 *   ]
 * };
 *
 * var ages = {
 *   'stooges': [
 *     { 'age': 40 },
 *     { 'age': 50 }
 *   ]
 * };
 *
 * _.merge(names, ages);
 * // => { 'stooges': [{ 'name': 'moe', 'age': 40 }, { 'name': 'larry', 'age': 50 }] }
 *
 * var food = {
 *   'fruits': ['apple'],
 *   'vegetables': ['asparagus']
 * };
 *
 * var otherFood = {
 *   'fruits': ['banana'],
 *   'vegetables': ['beets']
 * };
 *
 * _.merge(food, otherFood, function(a, b) {
 *   return _.isObject(a) ? (_.isArray(a) ? a.concat(b) : _.merge(a, b)) : b;
 * });
 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['asparagus', 'beets'] }
 */

function merge(object, source, deepIndicator) {
    var args = arguments
    var index = 0
    var length = 2
    var stackA
    var stackB

    if(!isObject(object)) {
        return object
    }
    if(deepIndicator === indicatorObject) {
        var callback = args[3]
        stackA = args[4]
        stackB = args[5]
    } else {
        stackA = []
        stackB = []

        // allows working with `_.reduce` and `_.reduceRight` without
        // using their `callback` arguments, `index|key` and `collection`
        if(typeof deepIndicator != 'number') {
            length = args.length
            callback = typeof(callback = args[length - 2]) == 'function' ? createCallback(callback, args[--length], 2) : (typeof(callback = args[length - 1]) == 'function' && callback)
        }
    }
    while(++index < length) {
        var isArr = isArray(args[index])
        ;(isArr ? forEach : forOwn)(args[index], function(source, key) {
            var found, isObj, value = object[key]

            if(source && ((isObj = isPlainObject(source)) || isArray(source))) {
                // avoid merging previously merged cyclic sources
                var stackLength = stackA.length
                while(stackLength--) {
                    if((found = stackA[stackLength] == source)) {
                        value = stackB[stackLength]
                        break
                    }
                }
                if(!found) {
                    value = isObj ? (isPlainObject(value) ? value : {}) : (isArray(value) ? value : [])

                    if(callback) {
                        value = callback(value, source)
                    }
                    // add `source` and associated `value` to the stack of traversed objects
                    stackA.push(source)
                    stackB.push(value)

                    // recursively merge objects and arrays (susceptible to call stack limits)
                    value = value && merge(value, source, indicatorObject, callback, stackA, stackB)
                }
            } else if(callback) {
                value = callback(value, source)
            } else if(isArr || typeof source != 'undefined') {
                value = source
            }
            object[key] = value
        });
    }
    return object
}

module.exports = merge
