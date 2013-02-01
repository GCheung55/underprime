'use strict'

var list = require('prime/shell/array')

list.implement({
    last: function(n){
        return (n != null) ? this.slice(Math.max(this.length - n, 0)) : this[this.length - 1]
    }
})

module.exports = list.last
