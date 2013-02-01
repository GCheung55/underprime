'use strict'

var createCallback = require('../../util/createCallback')

var array = require('prime/shell/array')
var object = require('prime/shell/object')
var ghost = require('prime/shell')

module.exports = function(collection, callback, thisArg){
    var results
    var g = ghost(collection)

    callback = createCallback(callback, thisArg)

    if (g.map) {
        results = g.map(callback, thisArg).valueOf()
    } else {
        results = array.map(collection, callback, thisArg);
    }

    return results
}