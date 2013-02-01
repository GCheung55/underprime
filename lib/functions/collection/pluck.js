'use strict'
var map = require('./map')
var createCallback = require('../lib/util/createCallback')

module.exports = function pluck(collection, property) {
    return map(collection, createCallback(property + ''))
}