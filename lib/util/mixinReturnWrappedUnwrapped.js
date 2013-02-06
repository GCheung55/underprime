'use strict'

var forOwn = require('../functions/object/forOwn')

// add functions that return unwrapped values when chaining
module.exports = function(object) {
    var _ = this

    forOwn(object, function(func, methodName) {
        _[methodName] = func
        _.prototype[methodName] = function(callback, thisArg) {
            var result = func(this._wrapped, callback, thisArg);
            return callback == null || (thisArg && typeof callback != 'function') ? result : new _(result);
        };
    });
}