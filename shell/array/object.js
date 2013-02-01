'use strict'

var list = require('prime/shell/array')

list.implement({
    object: function(values){
        var result = {}
        var index = -1
        var length = this && this.length || 0

        while (++index < length){
            var key = this[index]
            if (values) {
                result[key] = values[index]
            } else {
                result[key[0]] = key[1]
            }
        }
        return result
    }
})

module.exports = list.object
