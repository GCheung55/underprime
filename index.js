"use strict";

var _ = function(obj){
    if (obj == null || obj instanceof _) return obj
    if (!(this instanceof _)) return new _(obj)
    this._wrapped = obj
}

_.implement = function(name, shell){
    _[name] = shell[name]
    var proto = shell.prototype[name]
    _.prototype[name] = function(){
        return arguments.length ?
            proto.apply(this._wrapped, arguments) :
            proto.call(this._wrapped)
    }
}

module.exports = _
