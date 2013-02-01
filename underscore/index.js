'use strict'

var prime = require('prime')
var underdash = require('../')
var underdashMixin = underdash.mixin

var _ = prime({
    inherit: underdash,

    chain: function(){
        this._chain = true
        return this
    }
})

_.chain = function(obj){
    var o = _(obj)
    return o.chain()
}

_.mixin = function(name, shell){
    _[name] = shell[name]
    
    var proto = shell.prototype[name]
    var o = {}

    o[name] = function(){
        var result = arguments.length ?
            proto.apply(this._wrapped, arguments) :
            proto.call(this._wrapped)
        
        return this._chain ? _.chain(result) : result
    }

    _.implement(o)
}

underdash.mixin = function(){
    underdash.mixin.apply(underdash, arguments)
    _.mixin.apply(_, arguments)
}

module.exports = _
