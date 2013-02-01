'use strict'

var array = require('prime/es5/array'),
    function_ = require('prime/es5/function')

function_.implement({
    delay: function(wait){
        var func = this, args = array.slice(arguments, 1)
        return setTimeout(function() { func.apply(undefined, args); }, wait)
    }
})

module.exports = function_