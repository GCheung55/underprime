"use strict";

var _ = require('../'),
    list = require('../shell/list/lastIndexOf')

_.implement('lastIndexOf', list)
module.exports = _
