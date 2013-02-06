'use strict'

/**
 * Executes the `callback` function `n` times, returning an array of the results
 * of each `callback` execution. The `callback` is bound to `thisArg` and invoked
 * with one argument; (index).
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {Number} n The number of times to execute the callback.
 * @param {Function} callback The function called per iteration.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns a new array of the results of each `callback` execution.
 * @example
 *
 * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
 * // => [3, 6, 4]
 *
 * _.times(3, function(n) { mage.castSpell(n); });
 * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
 *
 * _.times(3, function(n) { this.cast(n); }, mage);
 * // => also calls `mage.castSpell(n)` three times
 */

module.exports = function(n, callback, thisArg) {
    n = +n || 0
    var index = -1
    var result = Array(n)

    while(++index < n) {
        result[index] = callback.call(thisArg, index)
    }
    return result
}
