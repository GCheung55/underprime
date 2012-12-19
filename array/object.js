var array = require('prime/es5/array');

array.implement({
    object: function(values) {
        var index = -1,
            length = this.length,
            result = {};

        while(++index < length) {
            var key = this[index];
            if(values) {
                result[key] = values[index];
            } else {
                result[key[0]] = key[1];
            }
        }
        return result;
    }
});

module.exports = array;