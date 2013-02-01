'use strict'

var list = require('prime/shell/array')

list.implement({
    initial: function(n){
        return this.slice(0, this.length - ((n == null) ? 1 : n))
    }
})

module.exports = list.initial
