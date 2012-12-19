var array = require('prime/es5/array'),
    type = require('prime/util/type');

array.implement({
    max: function(callback, thisArg) {
        var computed = -Infinity,
            index = -1,
            length = this ? this.length : 0,
            result = computed,
            typeValue = type(this), cb;

        if(callback || typeValue != 'array') {
            cb = !callback && typeValue == 'string' ?
                function(value){
                    return value.charCodeAt(0);
                } : 
                function(value, index, object){ 
                    return callback.call(thisArg, value, index, object);
                };

            array.forEach(this, function(value, index, collection) {
                var current = cb(value, index, collection);
                if(current > computed) {
                    computed = current;
                    result = value;
                }
            });
        } else {
            while(++index < length) {
                if(this[index] > result) {
                    result = this[index];
                }
            }
        }
        return result;
    }
});

module.exports = array;