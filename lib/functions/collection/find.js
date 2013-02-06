'use strict'

var forEach = require('./forEach')
var createCallback = require('../../private/createCallback')

/**
 * Examines each element in a `collection`, returning the first that the `callback`
 * returns truthy for. The `callback` is bound to `thisArg` and invoked with three
 * arguments; (value, index|key, collection).
 *
 * If a property name is passed for `callback`, the created "_.pluck" style
 * callback will return the property value of the given element.
 *
 * If an object is passed for `callback`, the created "_.where" style callback
 * will return `true` for elements that have the propeties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @alias detect
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function|Object|String} [callback=identity] The function called per
 *  iteration. If a string or object is passed, it will be used to create a
 *  "_.pluck" or "_.where" style callback, respectively.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Mixed} Returns the element that passed the callback check,
 *  else `undefined`.
 * @example
 *
 * var even = _.find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
 * // => 2
 *
 * var food = [
 *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
 *   { 'name': 'banana', 'organic': true,  'type': 'fruit' },
 *   { 'name': 'beet',   'organic': false, 'type': 'vegetable' },
 *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
 * ];
 *
 * // using "_.where" callback shorthand
 * var veggie = _.find(food, { 'type': 'vegetable' });
 * // => { 'name': 'beet', 'organic': false, 'type': 'vegetable' }
 *
 * // using "_.pluck" callback shorthand
 * var healthy = _.find(food, 'organic');
 * // => { 'name': 'banana', 'organic': true, 'type': 'fruit' }
 */

module.exports = function(collection, callback, thisArg) {
    var result;
    callback = createCallback(callback, thisArg);

    forEach(collection, function(value, index, collection) {
        if(callback(value, index, collection)) {
            result = value;
            return false;
        }
    });
    return result;
}
