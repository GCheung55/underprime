"use strict";

var _ = require('../'),
    list = require('prime/collection/list'),
    difference = require('./difference')

_.implement('without', list)
module.exports = _
