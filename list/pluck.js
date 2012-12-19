var list = require('prime/collection/list');

list.implement({
    pluck: function(key){
        return list.map(this, function(value){ return value[key]; });
    }
});

module.exports = list;