"use strict";

var list = require('prime/collection/list')

list.implement({
    range: function(start, end, step){
        start = +start || 0
        step = +step || 1

        if (end == null){
            end = start
            start = 0
        }
        // use `Array(length)` so V8 will avoid the slower "dictionary" mode
        // http://youtu.be/XAqIpGU8ZZk#t=17m25s
        var index = -1,
            length = Math.max(0, Math.ceil((end - start) / step)),
            result = Array(length)

        while (++index < length){
            result[index] = start
            start += step
        }
        return result
    }
})

require('../').implement('range', list)
module.exports = list.range
