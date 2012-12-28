"use strict";

var _ = function(obj){
    if (obj == null || obj instanceof _) return obj
    if (!(this instanceof _)) return new _(obj)
    this._wrapped = obj
}

_.chain = function(obj){
    var o = new _(obj)
    o._chain = true
    return o
}

_.prototype.chain = function(){
    this._chain = true
    return this
}

_.prototype.value = _.prototype.valueOf = function(){
    return this._wrapped
}

_.implement = function(name, shell){
    _[name] = shell[name]
    var proto = shell.prototype[name]
    _.prototype[name] = function(){
        this._wrapped = arguments.length ?
            proto.apply(this._wrapped, arguments) :
            proto.call(this._wrapped)
        return this._chain ? this : this._wrapped
    }
}

module.exports = _
