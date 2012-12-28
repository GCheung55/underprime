"use strict";

var list = require('prime/collection/list')

list.implement({
    pluck: function(key){
        return list.map(this, function(value){
            return value[key]
        })
    }
})

require('../').implement('pluck', list)
module.exports = list.pluck
