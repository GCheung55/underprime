'use strict'

var function_ = require('prime/es5/function')

function_.implement({
    throttle: function(wait) {
        var func = this, args, result, thisArg, timeoutId, lastCalled = 0

        function trailingCall() {
            lastCalled = new Date
            timeoutId = null
            result = func.apply(thisArg, args)
        }
        return function() {
            var now = new Date,
                remaining = wait - (now - lastCalled)

            args = arguments
            thisArg = this

            if(remaining <= 0) {
                clearTimeout(timeoutId)
                timeoutId = null
                lastCalled = now
                result = func.apply(thisArg, args)
            } else if(!timeoutId) {
                timeoutId = setTimeout(trailingCall, remaining)
            }
            return result
        }
    }
})

module.exports = function_