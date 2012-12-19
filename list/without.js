var list = require('prime/collection/list');

require('./difference');

list.implement({
    without: function() {
        return list.difference(this, list.slice(arguments));
    }
});

module.exports = list;