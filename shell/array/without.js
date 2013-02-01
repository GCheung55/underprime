'use strict'

var list = require('prime/shell/array')
var difference = require('./difference')

list.implement({
    without: function() {
        return difference(this, list.slice(arguments))
    }
})

module.exports = list.without
