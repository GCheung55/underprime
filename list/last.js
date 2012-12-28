"use strict";

var list = require('prime/collection/list')

list.implement({
    last: function(n){
        return (n != null) ? this.slice(Math.max(this.length - n, 0)) : this[this.length - 1]
    }
})

require('../').implement('last', list)
module.exports = list.last
