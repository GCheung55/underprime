var array = require('prime/es5/array');

require('./uniq');

array.implement({
    intersection: function() {
        var rest = array.slice(arguments);
        return array.filter(array.uniq(this), function(item) {
            return array.every(rest, function(other) {
                return array.indexOf(other, item) >= 0;
            });
        });
    }
});

module.exports = array;