"use strict";

var _ = require('../'),
    hash = require('../shell/object/pairs')

_.implement('pairs', hash)
module.exports = hash
