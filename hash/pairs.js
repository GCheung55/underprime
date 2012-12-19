var hash = require('prime/collection/hash');

hash.implement({
    pairs: function() {
        var index = -1,
            props = hash.keys(this),
            length = props.length,
            result = Array(length);

        while(++index < length) {
            var key = props[index];
            result[index] = [key, this[key]];
        }
        return result;
    }
});

module.exports = hash;