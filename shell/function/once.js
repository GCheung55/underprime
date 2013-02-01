'use strict'

var function_ = require('prime/es5/function')

function_.implement({
    once: function() {
        var func = this, ran, result;

        return function() {
            if(ran) {
                return result
            }
            ran = true
            result = func.apply(this, arguments)

            // clear the `func` variable so the function may be garbage collected
            func = null
            return result
        }
    }
})

module.exports = function_