'use strict'

var _ = require('../')
var mixinReturnUnwrapped = require('../lib/util/mixinReturnUnwrapped')

mixinReturnUnwrapped.call(_, {
    reduceRight: require('../lib/functions/collection/reduceRight')
})

module.exports = _