'use strict'

var createBound = require('../../private/createBound')
var slice = require('../../private/slice')
var indicatorObject = {}

/**
 * This method is similar to `_.partial`, except that `partial` arguments are
 * appended to those passed to the new function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to partially apply arguments to.
 * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * _.mixin({
 *   'defaultsDeep': _.partialRight(_.merge, _.defaults)
 * });
 *
 * var options = {
 *   'variable': 'data',
 *   'imports': { 'jq': $ }
 * };
 *
 * _.defaultsDeep(options, _.templateSettings);
 *
 * options.variable
 * // => 'data'
 *
 * options.imports
 * // => { '_': _, 'jq': $ }
 */

module.exports = function(func) {
    return createBound(func, slice(arguments, 1), null, indicatorObject)
}
