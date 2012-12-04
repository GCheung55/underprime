var array = require('prime/es5/array');

array.implement({
    first: function(n) {
        return (n != null) ? this.slice(0, n) : this[0];
    }
});

module.exports = array;