'use strict'

var eachIteratorOptions = require('./eachIteratorOptions')

/** Reusable iterator options for `forIn` and `forOwn` */
module.exports = {
    'top': 'if (!objectTypes[typeof iterable]) return result;\n' + eachIteratorOptions.top,
    'arrays': false
}
