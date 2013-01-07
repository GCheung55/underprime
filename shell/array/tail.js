"use strict";

var list = require('./rest')

list.implement({
    tail: list.prototype.rest
})

module.exports = list.tail
