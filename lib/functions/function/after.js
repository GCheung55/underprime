'use strict'

/**
 * Creates a function that is restricted to executing `func` only after it is
 * called `n` times. The `func` is executed with the `this` binding of the
 * created function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Number} n The number of times the function must be called before
 * it is executed.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var renderNotes = _.after(notes.length, render);
 * _.forEach(notes, function(note) {
 *   note.asyncSave({ 'success': renderNotes });
 * });
 * // `renderNotes` is run once, after all notes have saved
 */

module.exports = function(n, func) {
    if(n < 1) {
        return func()
    }
    return function() {
        if(--n < 1) {
            return func.apply(this, arguments)
        }
    }
}
