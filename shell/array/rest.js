"use strict";

var list = require('prime/collection/list')

list.implement({
    rest: function(n){
        return this.slice((n == null) ? 1 : n)
    }
})

module.exports = list.rest
