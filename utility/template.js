'use strict'

var _ = require('../')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    template: require('../lib/functions/utility/template')
})

_.templateSettings = require('../lib/private/templateSettings')

module.exports = _