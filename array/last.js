var array = require('prime/es5/array');

array.implement({
    last: function(n) {
        return (n != null) ? this.slice(Math.max(this.length - n, 0)) : this[this.length - 1];
    }
});

module.exports = array;