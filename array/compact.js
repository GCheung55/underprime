var array = require('prime/es5/array');

array.implement({
    compact: function() {
        return array.filter(this, function(value) {
            return !!value;
        });
    }
});

module.exports = array;