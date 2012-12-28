"use strict";

var list = require('prime/collection/list')

var uniq = require('./uniq').uniq

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

module.exports = list
