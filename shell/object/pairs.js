'use strict'

var hash = require('prime/shell/object')

hash.implement({
    pairs: function(){
        var index = -1
        var props = hash.keys(this)
        var length = props.length
        var result = Array(length)

        while (++index < length){
            var key = props[index]
            result[index] = [key, this[key]]
        }
        return result
    }
})

module.exports = hash.pairs
