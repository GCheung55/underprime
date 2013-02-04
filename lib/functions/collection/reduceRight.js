'use strict'
var typeOf = require('prime/type')
var keys = require('../object/keys')
var createCallback = require('../../private/createCallback')
var noCharByIndex = require('../../private/noCharByIndex')
var each = require('./each')

module.exports = function reduceRight(collection, callback, accumulator, thisArg) {
    var iteratee = collection
    var length = collection ? collection.length : 0
    var noaccum = arguments.length < 3

    if(typeof length != 'number') {
        var props = keys(collection)
        length = props.length
    } else if(noCharByIndex && typeOf(collection) == 'string') {
        iteratee = collection.split('')
    }
    callback = createCallback(callback, thisArg, {})
    each(collection, function(value, index, collection) {
        index = props ? props[--length] : --length
        accumulator = noaccum ? (noaccum = false, iteratee[index]) : callback(accumulator, iteratee[index], index, collection)
    })
    return accumulator
}