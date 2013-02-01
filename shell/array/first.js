'use strict'

var list = require('prime/shell/array')

list.implement({
    first: function(n){
        return (n != null) ? this.slice(0, n) : this[0]
    }
})

module.exports = list.first
