'use strict'

var forOwn = require('../functions/object/forOwn')
var push = [].push

// add functions that return unwrapped values when chaining
module.exports = function(object) {
    var _ = this
    forOwn(object, function(func, methodName) {
        _[methodName] = func
        _.prototype[methodName] = function() {
            var args = [this._wrapped]
            push.apply(args, arguments)
            return func.apply(_, args)
        };
    });
}