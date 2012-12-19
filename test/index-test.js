var buster = require('buster');
var _ = require('../');

buster.testCase('ghost extensions', {
    '_ exists': function(){
        buster.assert( _ );
    }
});