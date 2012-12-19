var list = require('prime/collection/list'),
    hash = require('prime/collection/hash');

require('./max');
require('./pluck');

list.implement({
    zip: function() {
        list.splice(arguments, 0, 0, this);

        var index = -1,
            length =  this ? list.max(list.pluck(arguments, 'length')) : 0,
            result = Array(length);

        while(++index < length) {
            result[index] = list.pluck(arguments, index);
        }
        return result;
    }
});

module.exports = list;