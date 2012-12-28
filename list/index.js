"use strict";

var _ = require('../'),
    list = require('../shells/list'),
    hash = require('prime/collection/hash')

hash.each(list.prototype, function(value, key){
    // console.log(key, value);
})

require('./compact')
require('./difference')
require('./first')
require('./flatten')
require('./initial')
require('./intersection')
require('./last')
require('./max')
require('./object')
require('./pluck')
require('./range')
require('./rest')
require('./sortedIndex')
require('./union')
require('./uniq')
require('./without')
require('./zip')

module.exports = _
