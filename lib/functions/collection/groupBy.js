'use strict'
var createCallback = require('../../private/createCallback')
var each = require('./each')
var hasOwnProperty = require('../../private/hasOwnProperty')

module.exports = function(collection, callback, thisArg) {
    var result = {};
    callback = createCallback(callback, thisArg);

    each(collection, function(value, key, collection) {
        key = callback(value, key, collection) + '';
        (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
    });
    return result;
}