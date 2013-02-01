'use strict'

var indexOf = require('../array/indexOf')
var each = require('./each')
var typeOf = require('prime/type')

module.exports = function(collection, target, fromIndex) {
    var index = -1,
        length = collection ? collection.length : 0,
        result = false;

    fromIndex = (fromIndex < 0 ? Math.max(0, length + fromIndex) : fromIndex) || 0

    if(typeof length == 'number') {
        result = (typeOf(collection) == 'string' ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1
    } else {
        each(collection, function(value) {
            if(++index >= fromIndex) {
                return !(result = value === target)
            }
        })
    }

    return result
}