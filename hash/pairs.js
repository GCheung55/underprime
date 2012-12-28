"use strict";

var _ = require('../'),
    hash = require('../shell/hash/pairs')

_.implement('pairs', hash)
module.exports = hash
