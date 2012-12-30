"use strict";

var _ = require('../'),
    list = require('../shell/array/unique')

_.implement('unique', list)
module.exports = _
