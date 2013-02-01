'use strict'

var function_ = require('prime/es5/function')

function_.implement({
    debounce: function (wait, immediate) {
        var func = this, args, result, thisArg, timeoutId;

        function delayed() {
            timeoutId = null;
            if(!immediate) {
                result = func.apply(thisArg, args);
            }
        }
        return function() {
            var isImmediate = immediate && !timeoutId;
            args = arguments;
            thisArg = this;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(delayed, wait);

            if(isImmediate) {
                result = func.apply(thisArg, args);
            }
            return result;
        };
    }
})

module.exports = function_