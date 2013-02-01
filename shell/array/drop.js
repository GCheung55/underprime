'use strict'

var list = require('./rest')

list.implement({
    drop: list.prototype.rest
})

module.exports = list.drop
