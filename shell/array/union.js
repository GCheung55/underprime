"use strict";

var list = require('prime/collection/list')
var uniq = require('./uniq')

list.implement({
    union: function(){
        list.splice(arguments, 0, 0, this)
        // list.unshift(arguments, this)
        return list.uniq(list.concat.apply(list, arguments))
    }
})

module.exports = list.union
