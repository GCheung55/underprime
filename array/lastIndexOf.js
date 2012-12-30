"use strict";

var _ = require('../'),
    list = require('../shell/array/lastIndexOf')

_.implement('lastIndexOf', list)
module.exports = _
