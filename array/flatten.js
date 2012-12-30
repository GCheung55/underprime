"use strict";

var _ = require('../'),
    list = require('../shell/array/flatten')

_.implement('flatten', list)
module.exports = _
