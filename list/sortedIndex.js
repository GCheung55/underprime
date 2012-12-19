var list = require('prime/collection/list'),
    type = require('prime/util/type');

list.implement({
    sortedIndex: function(value, callback, thisArg) {
        var low = 0,
            high = this.length;

        // explicitly reference `identity` for better inlining in Firefox
        var cb = callback ? type(callback) != 'function' ?
        function(object) {
            return object[callback];
        } : function(value, index, object) {
            return callback.call(thisArg, value, index, object);
        } : function(value) {
            return value;
        };

        value = cb(value);

        while(low < high) {
            var mid = (low + high) >>> 1;
            cb(this[mid]) < value ? low = mid + 1 : high = mid;
        }
        return low;
    }
});

module.exports = list;