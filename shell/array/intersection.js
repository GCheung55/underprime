'use strict'

var list = require('prime/shell/array')

var uniq = require('./uniq')

list.implement({
    intersection: function() {
        var rest = list.slice(arguments)
        return list.filter(uniq(this), function(item){
            return list.every(rest, function(other){
                return list.indexOf(other, item) >= 0
            })
        })
    }
})

module.exports = list.intersection
