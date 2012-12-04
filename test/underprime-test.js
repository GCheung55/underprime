var buster = require('buster');
var _ = require('../');

buster.testCase('underprime', {
    '_ exists': function(){
        buster.assert( _ );
    }
});