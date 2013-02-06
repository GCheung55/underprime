'use strict'

var createBound = require('../../private/createBound')
var slice = require('../../private/slice')

/**
 * Creates a function that, when called, invokes the method at `object[key]`
 * and prepends any additional `bindKey` arguments to those passed to the bound
 * function. This method differs from `_.bind` by allowing bound functions to
 * reference methods that will be redefined or don't yet exist.
 * See http://michaux.ca/articles/lazy-function-definition-pattern.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Object} object The object the method belongs to.
 * @param {String} key The key of the method.
 * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var object = {
 *   'name': 'moe',
 *   'greet': function(greeting) {
 *     return greeting + ' ' + this.name;
 *   }
 * };
 *
 * var func = _.bindKey(object, 'greet', 'hi');
 * func();
 * // => 'hi moe'
 *
 * object.greet = function(greeting) {
 *   return greeting + ', ' + this.name + '!';
 * };
 *
 * func();
 * // => 'hi, moe!'
 */

module.exports = function(object, key) {
    return createBound(object, key, slice(arguments, 2))
}
