'use strict'

var list = require('./uniq')

list.implement({
    unique: list.prototype.uniq
})

module.exports = list.unique
