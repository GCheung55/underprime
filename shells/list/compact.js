"use strict";

var list = require('prime/collection/list')

list.implement({
    compact: function(){
        return list.filter(this, function(value){
            return !!value;
        })
    }
})

require('../').implement('compact', list)
module.exports = list.compact
