var array = require('prime/es5/array');

array.implement({
    rest: function(n) {
        return this.slice((n == null) ? 1 : n);
    }
});

module.exports = array;