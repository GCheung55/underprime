'use strict'

var concat = require('../../private/concat')
var functions = require('../object/functions')
var bind = require('./bind')

/**
 * Binds methods on `object` to `object`, overwriting the existing method.
 * Method names may be specified as individual arguments or as arrays of method
 * names. If no method names are provided, all the function properties of `object`
 * will be bound.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Object} object The object to bind and assign the bound methods to.
 * @param {String} [methodName1, methodName2, ...] Method names on the object to bind.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var buttonView = {
 *  'label': 'lodash',
 *  'onClick': function() { alert('clicked: ' + this.label); }
 * };
 *
 * _.bindAll(buttonView);
 * jQuery('#lodash_button').on('click', buttonView.onClick);
 * // => When the button is clicked, `this.label` will have the correct value
 */

module.exports = function(object) {
    var funcs = concat.apply([], arguments)
    var index = funcs.length > 1 ? 0 : (funcs = functions(object), -1)
    var length = funcs.length

    while(++index < length) {
        var key = funcs[index]
        object[key] = bind(object[key], object)
    }
    return object
}
