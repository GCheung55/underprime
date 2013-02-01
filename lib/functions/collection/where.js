'use strict'
var filter = require('./filter')
var keys = require('../object/keys')

module.exports = function where(collection, properties) {
    var props = keys(properties)
    return filter(collection, function(object) {
        var length = props.length
        while(length--) {
            var result = object[props[length]] === properties[props[length]]
            if(!result) {
                break
            }
        }
        return !!result
    })
}