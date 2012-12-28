"use strict";

var list = require('prime/collection/list')

list.implement({
    uniq: function(isSorted, iterator, context){
        var initial = iterator ? list.map(this, iterator, context) : this
        var results = []
        var seen = []

        list.forEach(initial, function(value, index){
            if (isSorted ? (!index || seen[seen.length - 1] !== value) : (seen.indexOf(value) == -1)) {
                seen.push(value)
                results.push(this[index])
            }
        }, this)

        return results
    }
})

module.exports = list
