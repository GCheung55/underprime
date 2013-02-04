'use strict'
var typeOf = require('prime/type')
var createCallback = require('../../private/createCallback')
var charAtCallback = require('../../private/charAtCallback')
var each = require('./each')

module.exports = function min(collection, callback, thisArg) {
    var computed = Infinity
    var result = computed
    var type = typeOf(collection)

    if(!callback && type == 'array') {
        var index = -1
        var length = collection.length

        while(++index < length) {
            var value = collection[index]
            if(value < result) {
                result = value;
            }
        }
    } else {
        callback = !callback && type == 'string' ? charAtCallback : createCallback(callback, thisArg)

        each(collection, function(value, index, collection) {
            var current = callback(value, index, collection)
            if(current < computed) {
                computed = current
                result = value
            }
        });
    }
    return result;
}