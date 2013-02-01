'use strict'

var list = require('./first')

list.implement({
    take: list.prototype.first
})

module.exports = list.take
