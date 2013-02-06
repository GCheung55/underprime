'use strict'

var ctor = module.exports = function() {
    this.x = 1;
}
ctor.prototype = {
    'valueOf': 1,
    'y': 1
};
