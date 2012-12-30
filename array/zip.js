"use strict";

var _ = require('../'),
    list = require('../shell/list/zip'),
    max = require('./max'),
    pluck = require('./pluck')

_.implement('zip', list)
module.exports = _
