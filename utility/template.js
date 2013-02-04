'use strict'

var _ = require('../')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    template: require('../lib/functions/utility/template')
})

module.exports = _