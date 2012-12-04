var array = require('prime/es5/array');

require('./difference');

array.implement({
    without: function() {
        return array.difference(this, array.slice(arguments));
    }
});

module.exports = array;