'use strict'

/** Reusable iterator options shared by `each`, `forIn`, and `forOwn` */
var eachIteratorOptions = {
    'args': 'collection, callback, thisArg',
    'top': "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
    'arrays': "typeof length == 'number'",
    'loop': 'if (callback(iterable[index], index, collection) === false) return result'
}

module.exports = eachIteratorOptions