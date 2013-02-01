'use strict'
var array = require('prime/shell/array')
var each = require('./each')

module.exports = function invoke(collection, methodName) {
    var args = array.slice(arguments, 2)
    var index = -1
    var isFunc = typeof methodName == 'function'
    var length = collection ? collection.length : 0
    var result = Array(typeof length == 'number' ? length : 0)

    each(collection, function(value) {
        result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args)
    })
    
    return result
}