var buster = require('buster');
var array = require('../array');
var _ = require('../');

buster.testCase('underprime - array', {

    'array exists': function(){
        buster.assert( array );
    },

    'first()': {
        'should return the first element of an array': function(){
            var arr = [5, 4, 3, 2, 1],
                test = array.first(arr);
                test = _(arr).first();

            buster.assert.equals(test, 5);
        },
        'should return the first n elements of the array if n is passed': function(){
            var arr = [5, 4, 3, 2, 1],
                test = array.first(arr, 2);

            buster.assert.equals(test, [5, 4]);
        }
    },

    'initial()': {
        'should return everything but the last entry of the array': function(){
            var arr = [5, 4, 3, 2, 1],
                test = array.initial(arr);

            buster.assert.equals(test, [5, 4, 3, 2]);
        },

        'should return everything but the last n elements if n is passed': function(){
            var arr = [5, 4, 3, 2, 1],
                test = array.initial(arr, 2);

            buster.assert.equals(test, [5, 4, 3]);
        }
    },

    'last()': {
        'should return the last element of an array': function(){
            var arr = [5, 4, 3, 2, 1],
                test = array.last(arr);

            buster.assert.equals(test, 1);
        },

        'should return the last n elements if n is passed': function(){
            var arr = [5, 4, 3, 2, 1],
                test = array.last(arr, 2);

            buster.assert.equals(test, [2, 1]);
        }
    },

    'rest()': {
        'should return the rest of the elements in an array': function(){
            var arr = [5, 4, 3, 2, 1],
                test = array.rest(arr);

            buster.assert.equals(test, [4, 3, 2, 1]);
        },

        'should return the values of the array from passed index onward': function(){
            var arr = [5, 4, 3, 2, 1],
                test = array.rest(arr, 2);

            buster.assert.equals(test, [3, 2, 1]);
        }
    },

    'compact()': {
        'should return a copy of the array with all falsy values removed': function(){
            var arr = [0, 1, false, 2, '', 3],
                test = array.compact(arr);

            buster.assert.equals(test, [1, 2, 3]);
        }
    },

    'flatten()': {
        'should flatten a nested array (the nesting can be to any depth)': function(){
            var arr = [1, [2], [3, [[4]]]],
                test = array.flatten(arr);

            buster.assert.equals(test, [1, 2, 3, 4]);
        },

        'should flatten a nested array only a single level if shallow is passed': function(){
            var arr = [1, [2], [3, [[4]]]],
                test = array.flatten(arr, true);

            buster.assert.equals(test, [1, 2, 3, [[4]]]);
        }
    },

    'difference()': {
        'should return the values from array that are not present in the other arrays': function(){
            var arr = [1, 2, 3, 4, 5],
                other = [5, 2, 10],
                test = array.difference(arr, other, other);

            buster.assert.equals(test, [1, 3, 4]);
        }
    },

    'without()': {
        'should return a copy of the array with all instances of the values removed': function(){
            var arr = [1, 2, 1, 0, 3, 1, 4],
                test = array.without(arr, 0, 1);

            buster.assert.equals(test, [2, 3, 4]);
        }
    },

    'uniq()': {
        'should return a duplicate-free version of the array': {
            'by default': function(){
                var arr = [1, 2, 1, 3, 1, 4],
                    test = array.uniq(arr);

                buster.assert.equals(test, [1, 2, 3, 4]);
            },

            'faster when isSorted is passed, with the knowledge that the array is already sorted': function(){
                var arr = [1, 1, 1, 2, 3, 4],
                    test = array.uniq(arr, true);

                buster.assert.equals(test, [1, 2, 3, 4]);
            },

            'where computed uniq items are based on a transformation when an iterator is passed': function(){
                var arr = [{name:'moe'}, {name:'curly'}, {name:'larry'}, {name:'curly'}],
                    iterator = function(value) {return value.name; },
                    test = array.map(array.uniq(arr, false, iterator), iterator).join(', ');

                buster.assert.equals(test, 'moe, curly, larry');
            },

            'where isSorted works with iterator': function(){
                var arr = [1, 2, 2, 3, 4, 4],
                    iterator = function(value) { return value +1; },
                    test = array.uniq(arr, true, iterator).join(', ');

                buster.assert.equals(test, '1, 2, 3, 4');
            }
        }
    },

    'union()': {
        'should return an array consisting of unique items, in order, that are present in one or more arrays': {
            'taking a list of arrays': function(){
                var test = array.union([1, 2, 3], [2, 30, 1], [1, 40]);

                buster.assert.equals(test, [1, 2, 3, 30, 40]);
            },

            'taking the union of a list of nested arrays': function(){
                var test = array.union([1, 2, 3], [2, 30, 1], [1, 40, [1]]);

                buster.assert.equals(test, [1, 2, 3, 30, 40, [1]]);
            }
        }
    }
});