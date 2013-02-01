'use strict'
var each = require('./each')

module.exports = function shuffle(collection) {
    var index = -1,
        length = collection ? collection.length : 0,
        result = Array(typeof length == 'number' ? length : 0);

    forEach(collection, function(value) {
        var rand = floor(Math.random() * (++index + 1));
        result[index] = result[rand];
        result[rand] = value;
    });
    return result;
}