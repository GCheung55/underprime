'use strict'
var array = require('prime/shell/array')
var object = require('prime/shell/object')
var ghost = require('prime/shell')

module.exports = function(collection, callback, thisArg){
    var results

    var g = ghost(collection)
    if (g.every) {
        results = g.some(callback, thisArg).valueOf()
    } else {
        results = array.some.apply(array, arguments)
    }

    return results
}