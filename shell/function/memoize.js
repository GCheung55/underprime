'use strict'

var array = require('prime/es5/array'),
    function_ = require('prime/es5/function')

function_.implement({
    memoize: function(resolver) {
        var func = this, cache = {}
        return function() {
            var key = (resolver ? resolver.apply(this, arguments) : arguments[0]) + ''
            return hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = func.apply(this, arguments))
        }
    }
})

module.exports = function_