"use strict";

var _ = require('../'),
    hash = require('../shells/hash/pairs')

_.implement('pairs', hash)
module.exports = hash
