var array = require('prime/es5/array');

array.implement({
    initial: function(n) {
        return this.slice(0, this.length - ((n == null) ? 1 : n));
    }
});

module.exports = array;