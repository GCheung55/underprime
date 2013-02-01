'use strict'
var typeOf = require('prime/util/type')
var values = require('../object/values')

module.exports = function(collection) {
    if(collection && typeof collection.length == 'number') {
        return noCharByIndex && typeOf(collection) == 'string' ? collection.split('') : slice(collection)
    }
    return values(collection)
}