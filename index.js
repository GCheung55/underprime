'use strict'

var prime = require('prime')

var _ = prime({
    constructor: function(obj){
        if (obj == null || obj instanceof _) return obj
        if (!(this instanceof _)) return new _(obj)
        this._wrapped = obj
    },

    value: function(){
        return this._wrapped
    }
})

module.exports = _
