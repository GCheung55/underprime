'use strict'

var prime = require('prime')

var _ = prime({
    constructor: function(obj) {
        if(obj == null || obj instanceof _) return obj
        if(!(this instanceof _)) return new _(obj)
        this._wrapped = obj
    },

    value: function() {
        return this._wrapped
    },

    toString: function() {
        return this._wrapped.toString()
    },

    valueOf: function() {
        return this.value()
    }
})

var methods = {}
var arrayRef = []

// add `Array` functions that return unwrapped values
prime.each(['join', 'pop', 'shift'], function(methodName) {
    var func = arrayRef[methodName]
    methods[methodName] = function() {
            return func.apply(this._wrapped, arguments)
        }
});

// add `Array` functions that return the wrapped value
prime.each(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
    var func = arrayRef[methodName]
    methods[methodName] = function() {
            func.apply(this._wrapped, arguments)
            return this
        }
})

// add `Array` functions that return new wrapped values
prime.each(['concat', 'slice', 'splice'], function(methodName) {
    var func = arrayRef[methodName];
    methods[methodName] = function() {
        return this.constructor.call(null, (func.apply(this._wrapped, arguments)));
    };
});

/**
 * Detect if `Array#shift` and `Array#splice` augment array-like objects
 * incorrectly:
 *
 * Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array `shift()`
 * and `splice()` functions that fail to remove the last element, `value[0]`,
 * of array-like objects even though the `length` property is set to `0`.
 * The `shift()` method is buggy in IE 8 compatibility mode, while `splice()`
 * is buggy regardless of mode in IE < 9 and buggy in compatibility mode in IE 9.
 */
var hasObjectSpliceBug = (hasObjectSpliceBug = {
    '0': 1,
    'length': 1
}, arrayRef.splice.call(hasObjectSpliceBug, 0, 1), hasObjectSpliceBug[0])

// avoid array-like object bugs with `Array#shift` and `Array#splice`
// in Firefox < 10 and IE < 9
if(hasObjectSpliceBug) {
    prime.each(['pop', 'shift', 'splice'], function(methodName) {
        var func = arrayRef[methodName]
        var isSplice = methodName == 'splice'

        methods[methodName] = function() {
            var value = this._wrapped
            var result = func.apply(value, arguments)

            if(value.length === 0) {
                delete value[0];
            }
            return isSplice ? this.constructor.call(null, result) : result;
        };
    });
}

_.implement(methods)

module.exports = _