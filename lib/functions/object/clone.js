'use strict'

var createCallback = require('../../util/createCallback')
var isObject = require('./isObject')
var toString = {}.toString
var cloneableClasses = require('../../util/cloneableClasses')
var noNodeClass = require('../../detect/noNodeClass')
var isNode = require('../../util/isNode')
var isArray = require('./isArray')
var slice = require('../../util/slice')
var assign = require('./assign')
var ctorByClass = require('../../util/ctorByClass')
var boolClass = require('../../toStringClasses/boolClass')
var dateClass = require('../../toStringClasses/dateClass')
var numberClass = require('../../toStringClasses/numberClass')
var regexpClass = require('../../toStringClasses/regexpClass')
var stringClass = require('../../toStringClasses/stringClass')
var hasOwnProperty = require('../../util/hasOwnProperty')
var forEach = require('../collection/forEach')
var forOwn = require('./forOwn')


/**
 * Creates a clone of `value`. If `deep` is `true`, nested objects will also be
 * cloned, otherwise they will be assigned by reference. If a `callback` function
 * is passed, it will be executed to produce the cloned values. If `callback`
 * returns the value it was passed, cloning will be handled by the method instead.
 * The `callback` is bound to `thisArg` and invoked with one argument; (value).
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to clone.
 * @param {Boolean} [deep=false] A flag to indicate a deep clone.
 * @param {Function} [callback] The function to customize cloning values.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @param- {Array} [stackA=[]] Internally used to track traversed source objects.
 * @param- {Array} [stackB=[]] Internally used to associate clones with source counterparts.
 * @returns {Mixed} Returns the cloned `value`.
 * @example
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 }
 * ];
 *
 * var shallow = _.clone(stooges);
 * shallow[0] === stooges[0];
 * // => true
 *
 * var deep = _.clone(stooges, true);
 * deep[0] === stooges[0];
 * // => false
 *
 * _.mixin({
 *   'clone': _.partialRight(_.clone, function(value) {
 *     return _.isElement(value) ? value.cloneNode(false) : value;
 *   })
 * });
 *
 * var clone = _.clone(document.body);
 * clone.childNodes.length;
 * // => 0
 */

function clone(value, deep, callback, thisArg, stackA, stackB) {
    var result = value

    // allows working with "Collections" methods without using their `callback`
    // argument, `index|key`, for this method's `callback`
    if(typeof deep == 'function') {
        thisArg = callback
        callback = deep
        deep = false
    }
    if(typeof callback == 'function') {
        callback = typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg, 1)
        result = callback(result)
        var done = value !== result
    }
    // inspect [[Class]]
    var isObj = isObject(result)
    if(isObj) {
        var className = toString.call(result)
        if(!cloneableClasses[className] || (noNodeClass && isNode(result))) {
            return result
        }
        var isArr = isArray(result)
    }
    // shallow clone
    if(!isObj || !deep) {
        return isObj && !done ? (isArr ? slice(result) : assign({}, result)) : result
    }
    var ctor = ctorByClass[className]
    switch(className) {
    case boolClass:
    case dateClass:
        return done ? result : new ctor(+result)

    case numberClass:
    case stringClass:
        return done ? result : new ctor(result)

    case regexpClass:
        return done ? result : ctor(result.source, reFlags.exec(result))
    }
    // check for circular references and return corresponding clone
    stackA || (stackA = [])
    stackB || (stackB = [])

    var length = stackA.length
    while(length--) {
        if(stackA[length] == value) {
            return stackB[length]
        }
    }
    // init cloned object
    if(!done) {
        result = isArr ? ctor(result.length) : {}

        // add array properties assigned by `RegExp#exec`
        if(isArr) {
            if(hasOwnProperty.call(value, 'index')) {
                result.index = value.index
            }
            if(hasOwnProperty.call(value, 'input')) {
                result.input = value.input
            }
        }
    }
    // add the source value to the stack of traversed objects
    // and associate it with its clone
    stackA.push(value)
    stackB.push(result)

    // recursively populate clone (susceptible to call stack limits)
    ;(isArr ? forEach : forOwn)(done ? result : value, function(objValue, key) {
        result[key] = clone(objValue, deep, callback, undefined, stackA, stackB);
    })

    return result
}

module.exports = clone
