"use strict";

var buster = require('buster')
var hash = require('../hash')
var _ = require('../')

buster.testCase('underprime - hash', {

    'hash exists': function(){
        buster.assert(hash)
    },

    'pairs()': {
        'can convert an object into pairs': function(){
            var result = _({one: 1, two: 2}).pairs()
            buster.assert.equals(result, [['one', 1], ['two', 2]])
        },
        '... even when one of them is "length"': function(){
            var result = _({one: 1, two: 2, length: 3}).pairs()
            buster.assert.equals(result, [['one', 1], ['two', 2], ['length', 3]])
        }
    }

})
