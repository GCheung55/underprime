"use strict";

var list = require('prime/collection/list')

list.implement({
    rest: function(n){
        return this.slice((n == null) ? 1 : n)
    }
})

require('../').implement('rest', list)
module.exports = list.rest
