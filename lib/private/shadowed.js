'use strict'

/** Used to fix the JScript [[DontEnum]] bug */
var shadowed = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf']

module.exports = shadowed