'use strict'
var keys = require('../object/keys')

module.exports = function (collection) {
    var length = collection ? collection.length : 0
    return typeof length == 'number' ? length : keys(collection).length
}