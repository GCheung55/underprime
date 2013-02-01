'use strict'
var createCallback = require('../lib/util/createCallback')
var each = require('./each')

module.exports = function groupBy(collection, callback, thisArg) {
    var result = {};
    callback = createCallback(callback, thisArg);

    each(collection, function(value, key, collection) {
        key = callback(value, key, collection) + '';
        (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
    });
    return result;
}