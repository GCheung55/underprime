'use strict'

var list = require('prime/shell/array')

list.implement({
    pluck: function(key){
        return list.map(this, function(value){
            return value[key]
        })
    }
})

module.exports = list.pluck
