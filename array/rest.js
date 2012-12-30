"use strict";

var _ = require('../'),
    list = require('../shell/array/rest')

_.implement('rest', list)
module.exports = _
