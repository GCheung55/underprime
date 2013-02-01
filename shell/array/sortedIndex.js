'use strict'

var list = require('prime/shell/array')
var typeOf = require('prime/util/type')

list.implement({
    sortedIndex: function(value, callback, thisArg) {
        var low = 0
        var high = this.length

        // explicitly reference `identity` for better inlining in Firefox
        var cb = callback ? typeOf(callback) != 'function' ?
            function(object) {
                return object[callback]
            } : function(value, index, object) {
                return callback.call(thisArg, value, index, object)
            } : function(value) {
                return value
            }

        value = cb(value)

        while (low < high){
            var mid = (low + high) >>> 1
            if (cb(this[mid]) < value){
                low = mid + 1
            } else {
                high = mid
            }
        }
        return low
    }
})

module.exports = list.sortedIndex
