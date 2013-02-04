'use strict'

var _ = require('../')
var mixin = require('../lib/functions/utility/mixin')

mixin.call(_, {
    methods: require('../lib/functions/object/methods')
})

module.exports = _