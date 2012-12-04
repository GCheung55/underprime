var array = require('prime/es5/array');

require('./flatten');

array.implement({
    difference: function() {
        var rest = array.concat.apply(array, arguments);

        return array.filter(this, function(value){
            return rest.indexOf(value) == -1;
        });
    }   
});

module.exports = array;