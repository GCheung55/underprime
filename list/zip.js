"use strict";

var _ = require('../'),
    list = require('../shells/list/zip'),
    max = require('./max'),
    pluck = require('./pluck')

_.implement('zip', list)
module.exports = _
