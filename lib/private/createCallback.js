'use strict'

var identity = require('../functions/utility/identity')

module.exports = function(func, thisArg, accumulating) {
    if(!func) {
        return identity;
    }
    if(typeof func != 'function') {
        return function(object) {
            return object[func];
        };
    }
    if(typeof thisArg != 'undefined') {
        if(accumulating) {
            return function(accumulator, value, index, object) {
                return func.call(thisArg, accumulator, value, index, object);
            };
        }
        return function(value, index, object) {
            return func.call(thisArg, value, index, object);
        };
    }
    return func;
}