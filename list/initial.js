var list = require('prime/collection/list');

list.implement({
    initial: function(n) {
        return this.slice(0, this.length - ((n == null) ? 1 : n));
    }
});

module.exports = list;