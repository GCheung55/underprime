"use strict";

var list = require('./first')

list.implement({
    head: list.prototype.first
})

module.exports = list
