'use strict'

var _ = require('../')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    noConflict: require('../lib/functions/utility/noConflict')
})

module.exports = _