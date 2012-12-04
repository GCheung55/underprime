var array = require('./uniq');

array.implement({
    union: function() {
        array.splice(arguments, 0, 0, this);
        // array.unshift(arguments, this);

        return array.uniq(array.concat.apply(array, arguments));
    }
});

module.exports = array;