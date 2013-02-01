'use strict'
var typeOf = require('prime/util/type')
var each = require('./each')
var createCallback = require('../lib/util/createCallback')

module.exports = function reduce(collection, callback, accumulator, thisArg) {
    var noaccum = arguments.length < 3;

    callback = createCallback(callback, thisArg, {});

    if(typeOf(collection) == 'array') {
        var index = -1,
            length = collection.length;

        if(noaccum) {
            accumulator = collection[++index];
        }
        while(++index < length) {
            accumulator = callback(accumulator, collection[index], index, collection);
        }
    } else {
        each(collection, function(value, index, collection) {
            accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection)
        });
    }
    return accumulator;
}