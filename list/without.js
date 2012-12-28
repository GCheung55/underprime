"use strict";

var list = require('prime/collection/list')
var difference = require('./difference')

list.implement({
    without: function() {
        return difference(this, list.slice(arguments))
    }
})

require('../').implement('without', list)
module.exports = list.without
