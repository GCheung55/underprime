'use strict'

function ctor() {
    this.x = 1;
}
ctor.prototype = {
    'valueOf': 1,
    'y': 1
};

module.exports = ctor