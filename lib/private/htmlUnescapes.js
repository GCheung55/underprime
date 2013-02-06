'use strict'
var invert = require('../functions/object/invert')
var htmlEscapes = require('./htmlEscapes')

/** Used to convert HTML entities to characters */
module.exports = invert(htmlEscapes)
