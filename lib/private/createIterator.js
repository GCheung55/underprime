'use strict'

var hasDontEnumBug = require('../private/hasDontEnumBug')
var isKeysFast = require('../private/isKeysFast')
var nonEnumArgs = require('../private/nonEnumArgs')
var noCharByIndex = require('../private/noCharByIndex')
var shadowed = require('./shadowed')
var createCallback = require('./createCallback')
var hasOwnProperty = require('./hasOwnProperty')
var isArguments = require('../functions/object/isArguments')
var isArray = require('../functions/object/isArray')
var isString = require('../functions/object/isString')
var objectTypes = require('../private/objectTypes')
var nativeKeys = require('./nativeKeys')
var propertyIsEnumerable = {}.propertyIsEnumerable
var iteratorTemplate = require('./iteratorTemplate')

/**
 * Creates compiled iteration functions.
 *
 * @private
 * @param {Object} [options1, options2, ...] The compile options object(s).
 *  arrays - A string of code to determine if the iterable is an array or array-like.
 *  useHas - A boolean to specify using `hasOwnProperty` checks in the object loop.
 *  args - A string of comma separated arguments the iteration function will accept.
 *  top - A string of code to execute before the iteration branches.
 *  loop - A string of code to execute in the object loop.
 *  bottom - A string of code to execute after the iteration branches.
 *
 * @returns {Function} Returns the compiled function.
 */

module.exports = function(){
    var data = {
        // support properties
        'hasDontEnumBug': hasDontEnumBug,
        'isKeysFast': isKeysFast,
        'nonEnumArgs': nonEnumArgs,
        'noCharByIndex': noCharByIndex,
        'shadowed': shadowed,

        // iterator options
        'arrays': 'isArray(iterable)',
        'bottom': '',
        'loop': '',
        'top': '',
        'useHas': true
    }

    // merge options into a template data object
    for(var object, index = 0; object = arguments[index]; index++) {
        for(var key in object) {
            data[key] = object[key]
        }
    }
    var args = data.args
    data.firstArg = /^[^,]+/.exec(args)[0]

    // create the function factory
    var factory = Function('createCallback, hasOwnProperty, isArguments, isArray, isString, ' + 'objectTypes, nativeKeys, propertyIsEnumerable', 'return function(' + args + ') {\n' + iteratorTemplate(data) + '\n}')
    // return the compiled function
    return factory(
    createCallback, hasOwnProperty, isArguments, isArray, isString, objectTypes, nativeKeys, propertyIsEnumerable)
}
