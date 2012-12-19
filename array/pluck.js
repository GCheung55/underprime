var array = require('prime/es5/array');

array.implement({
    pluck: function(key){
        return array.map(this, function(value){ return value[key]; });
    }
});

module.exports = array;