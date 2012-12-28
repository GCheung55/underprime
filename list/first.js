"use strict";

var list = require('prime/collection/list')

list.implement({
    first: function(n){
        return (n != null) ? this.slice(0, n) : this[0]
    }
})

require('../').implement('first', list)
module.exports = list.first
