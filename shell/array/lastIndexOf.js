"use strict";

var list = require('prime/collection/list')

list.implement({
    lastIndexOf: function(value, fromIndex) {
        var index = this ? this.length : 0
        if(typeof fromIndex == 'number') {
            index = (fromIndex < 0 ? Math.max(0, index + fromIndex) : Math.min(fromIndex, index - 1)) + 1
        }
        while(index--) {
            if(this[index] === value) {
                return index
            }
        }
        return -1
    }
})

module.exports = list.lastIndexOf