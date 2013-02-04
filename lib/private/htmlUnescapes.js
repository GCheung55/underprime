'use strict'
var invert = require('../functions/object/invert')
var htmlEscapes = require('./htmlEscapes')

/** Used to convert HTML entities to characters */
var htmlUnescapes = invert(htmlEscapes)

module.exports = htmlUnescapes