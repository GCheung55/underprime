'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    methods: require('./functions').functions
})

module.exports = _