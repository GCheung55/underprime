'use strict'

var forEach = require('../collection/forEach')
var functions = require('../object/functions')
var push = [].push

/**
 * Adds functions properties of `object` to the `lodash` function and chainable
 * wrapper.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {Object} object The object of function properties to add to `lodash`.
 * @example
 *
 * _.mixin({
 *   'capitalize': function(string) {
 *     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
 *   }
 * });
 *
 * _.capitalize('moe');
 * // => 'Moe'
 *
 * _('moe').capitalize();
 * // => 'Moe'
 */

module.exports = function (object) {
    var _ = this

    forEach(functions(object), function(methodName) {
        var func = _[methodName] = object[methodName]

        _.prototype[methodName] = function() {
            var args = [this._wrapped]
            push.apply(args, arguments)
            return new _(func.apply(_, args))
        }
    })
}