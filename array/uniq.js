var array = require('prime/es5/array');

array.implement({
    uniq: function(isSorted, iterator, context) {
        var initial = iterator ? array.map(this, iterator, context) : this,
            results = [],
            seen = [];

        array.forEach(initial, function(value, index) {
            if (isSorted ? (!index || seen[seen.length - 1] !== value) : (seen.indexOf(value) == -1)) {
                seen.push(value);
                results.push(this[index]);
            }
        }, this);

        return results;
    }
});

module.exports = array;