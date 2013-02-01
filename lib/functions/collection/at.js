'use strict'
var array = require('prime/shell/array')
var concat = array.concat
var slice = array.slice
var noCharByIndex = require('../lib/detect/noCharByIndex')
var typeOf = require('prime/type')

module.exports = function(collection) {
    var index = -1
    var props = concat.apply(array, slice(arguments, 1))
    var length = props.length
    var result = Array(length)

    if(noCharByIndex && typeOf(collection) == 'string') {
        collection = collection.split('')
    }
    while(++index < length) {
        result[index] = collection[props[index]]
    }
    return result
}