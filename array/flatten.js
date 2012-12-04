var array = require('prime/es5/array');

var flatten = function(input, shallow, output) {
        array.forEach(input, function(value) {
            if (Array.isArray(value)) {
                shallow ? output.push.apply(output, value) : flatten(value, shallow, output);
            } else {
                output.push(value);
            }
        });
        return output;
    };

array.implement({
    flatten: function(shallow) {
        return flatten(this, shallow, []);
    }
});

module.exports = array;