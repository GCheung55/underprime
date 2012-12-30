"use strict";

var _ = require('../'),
    list = require('../shell/array/object')

_.implement('object', list)
module.exports = _
