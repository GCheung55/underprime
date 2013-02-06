'use strict'

var argsClass = require('../toStringClasses/argsClass')
var arrayClass = require('../toStringClasses/arrayClass')
var boolClass = require('../toStringClasses/boolClass')
var dateClass = require('../toStringClasses/dateClass')
var funcClass = require('../toStringClasses/funcClass')
var numberClass = require('../toStringClasses/numberClass')
var objectClass = require('../toStringClasses/objectClass')
var regexpClass = require('../toStringClasses/regexpClass')
var stringClass = require('../toStringClasses/stringClass')

/** Used to identify object classifications that `_.clone` supports */
var cloneableClasses = module.exports = {}
cloneableClasses[funcClass] = false
cloneableClasses[argsClass] = cloneableClasses[arrayClass] = cloneableClasses[boolClass] = cloneableClasses[dateClass] = cloneableClasses[numberClass] = cloneableClasses[objectClass] = cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true
