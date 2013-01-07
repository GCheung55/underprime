"use strict";

var list = require('prime/collection/list')

var flatten = function(input, shallow, output){
    list.forEach(input, function(value){
        if (list.isArray(value)){
            if (shallow){
                output.push.apply(output, value)
            } else {
                flatten(value, shallow, output)
            }
        } else {
            output.push(value)
        }
    })
    return output
}

list.implement({
    flatten: function(shallow) {
        return flatten(this, shallow, [])
    }
})

module.exports = list.flatten
