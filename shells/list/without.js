"use strict";

var list = require('prime/collection/list')
var difference = require('./difference').difference

list.implement({
    without: function() {
        return difference(this, list.slice(arguments))
    }
})

module.exports = list
