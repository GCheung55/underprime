'use strict'
var array = require('prime/shell/array')
var object = require('prime/shell/object')
var ghost = require('prime/shell')

module.exports = function(collection, callback, thisArg){
    var results

    var g = ghost(collection)
    if (g.filter) {
        results = g.filter(callback, thisArg).valueOf()
    } else {
        results = array.filter.apply(array, arguments)
    }

    return results
}