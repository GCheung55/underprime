var list = require('prime/collection/list');

require('./flatten');

list.implement({
    difference: function() {
        var rest = list.concat.apply(list, arguments);

        return list.filter(this, function(value){
            return rest.indexOf(value) == -1;
        });
    }   
});

module.exports = list;