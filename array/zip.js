var array = require('prime/es5/array'),
    hash = require('prime/collection/hash');

require('./max');
require('./pluck');

array.implement({
    zip: function() {
        array.splice(arguments, 0, 0, this);

        var index = -1,
            length =  this ? array.max(array.pluck(arguments, 'length')) : 0,
            result = Array(length);

        while(++index < length) {
            result[index] = array.pluck(arguments, index);
        }
        return result;
    }
});

module.exports = array;