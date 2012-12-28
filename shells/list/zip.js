"use strict";

var list = require('prime/collection/list')
var hash = require('prime/collection/hash')

var max = require('./max').max
var pluck = require('./pluck').pluck

list.implement({
    zip: function(){
        list.splice(arguments, 0, 0, this)

        var index = -1
        var length =  this ? max(pluck(arguments, 'length')) : 0
        var result = Array(length)

        while (++index < length){
            result[index] = pluck(arguments, index)
        }

        return result
    }
})

module.exports = list
