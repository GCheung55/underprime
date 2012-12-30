"use strict";

var _ = require('../'),
    list = require('../shell/list/head')

_.implement('head', list)
module.exports = _
