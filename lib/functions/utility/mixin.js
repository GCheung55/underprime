'use strict'

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

// implement at underprime || lodash || underscore level

// function mixin(object) {
//     forEach(functions(object), function(methodName) {
//         var func = lodash[methodName] = object[methodName];

//         lodash.prototype[methodName] = function() {
//             var args = [this.__wrapped__];
//             push.apply(args, arguments);
//             return new lodash(func.apply(lodash, args));
//         };
//     });
// }

// module.exports = mixin