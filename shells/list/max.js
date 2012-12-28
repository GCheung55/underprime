"use strict";

var list = require('prime/collection/list')
var typeOf = require('prime/util/type')

list.implement({
    max: function(callback, thisArg){
        var computed = -Infinity,
            index = -1,
            length = this ? this.length : 0,
            result = computed,
            type = typeOf(this), cb

        if (callback || type != 'array'){
            cb = !callback && type == 'string' ?
                function(value){
                    return value.charCodeAt(0)
                } :
                function(value, index, object){
                    return callback.call(thisArg, value, index, object)
                }

            list.forEach(this, function(value, index, collection){
                var current = cb(value, index, collection)
                if (current > computed){
                    computed = current
                    result = value
                }
            })
        } else {
            while (++index < length){
                if (this[index] > result){
                    result = this[index]
                }
            }
        }
        return result
    }
})

module.exports = list
