"use strict";

var _ = require('../'),
    list = require('../shell/array/head')

_.implement('head', list)
module.exports = _
