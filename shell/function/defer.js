'use strict'

var array = require('prime/es5/array'),
    function_ = require('prime/es5/function')

function_.implement({
    defer: function(){
        var func = this, args = array.slice(arguments)
        return setTimeout(function() { func.apply(undefined, args); }, 1)
    }
})

module.exports = function_