"use strict";

var array = require('prime/es5/array')
var list = require('prime/collection/list')

var flatten = function(input, shallow, output){
    list.forEach(input, function(value){
        if (array.isArray(value)){
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

require('../').implement('flatten', list)
module.exports = list.flatten
