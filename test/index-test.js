'use strict'

var buster = require('buster')
var _ = require('../index')
var array = require('../array')

buster.testCase('underprime', {

    '_ exists': function(){
        buster.assert(_)
    },

    'chain()': {

        'should chain methods': function(){
            var test = _.chain([1, [2, 3], 4]).flatten().union([5, 6, 7]).value()
            buster.assert.equals(test, [1, 2, 3, 4, 5, 6, 7])
        },

        'and chain as prototype method': function(){
            var test = _([1, [2, 3], 4]).chain().flatten().union([5, 6, 7]).value()
            buster.assert.equals(test, [1, 2, 3, 4, 5, 6, 7])
        }


    }
})
