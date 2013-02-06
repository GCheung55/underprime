'use strict'

var arrayClass = require('../toStringClasses/arrayClass')
var boolClass = require('../toStringClasses/boolClass')
var dateClass = require('../toStringClasses/dateClass')
var numberClass = require('../toStringClasses/numberClass')
var objectClass = require('../toStringClasses/objectClass')
var regexpClass = require('../toStringClasses/regexpClass')
var stringClass = require('../toStringClasses/stringClass')

/** Used to lookup a built-in constructor by [[Class]] */
var ctorByClass = module.exports = {}
ctorByClass[arrayClass] = Array
ctorByClass[boolClass] = Boolean
ctorByClass[dateClass] = Date
ctorByClass[objectClass] = Object
ctorByClass[numberClass] = Number
ctorByClass[regexpClass] = RegExp
ctorByClass[stringClass] = String
