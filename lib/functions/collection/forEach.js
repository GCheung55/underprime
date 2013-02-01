'use strict'
var array = require('prime/shell/array')
var object = require('prime/shell/object')
var ghost = require('prime/shell')

module.exports = function(collection, callback, thisArg){
    var g = ghost(collection)

    return g.each ? g.each.call(g, callback, thisArg) : collection
}