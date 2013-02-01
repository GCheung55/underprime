'use strict'

var list = require('prime/shell/array')

list.implement({
    compact: function(){
        return list.filter(this, function(value){
            return !!value;
        })
    }
})

module.exports = list.compact
