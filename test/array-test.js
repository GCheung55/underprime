'use strict'

var buster = require('buster')
var list = require('../array')
var _ = require('../')

buster.testCase('underprime - list', {

    'list exists': function(){
        buster.assert(list)
    },

    'first()': {
        'should return the first element of an array': function(){
            var arr = [5, 4, 3, 2, 1],
                test = _(arr).first()

            buster.assert.equals(test, '5')
        },
        'should return the first n elements of the array if n is passed': function(){
            var arr = [5, 4, 3, 2, 1],
                test = _(arr).first(2)

            buster.assert.equals(test, [5, 4])
        }
    },

    'initial()': {
        'should return everything but the last entry of the array': function(){
            var arr = [5, 4, 3, 2, 1],
                test = _(arr).initial()

            buster.assert.equals(test, [5, 4, 3, 2])
        },

        'should return everything but the last n elements if n is passed': function(){
            var arr = [5, 4, 3, 2, 1],
                test = _(arr).initial(2)

            buster.assert.equals(test, [5, 4, 3])
        }
    },

    'last()': {
        'should return the last element of an array': function(){
            var arr = [5, 4, 3, 2, 1],
                test = _(arr).last()

            buster.assert.equals(test, '1')
        },

        'should return the last n elements if n is passed': function(){
            var arr = [5, 4, 3, 2, 1],
                test = _(arr).last(2)

            buster.assert.equals(test, [2, 1])
        }
    },

    'rest()': {
        'should return the rest of the elements in an array': function(){
            var arr = [5, 4, 3, 2, 1],
                test = _(arr).rest()

            buster.assert.equals(test, [4, 3, 2, 1])
        },

        'should return the values of the array from passed index onward': function(){
            var arr = [5, 4, 3, 2, 1],
                test = _(arr).rest(2)

            buster.assert.equals(test, [3, 2, 1])
        }
    },

    'compact()': {
        'should return a copy of the array with all falsy values removed': function(){
            var arr = [0, 1, false, 2, '', 3],
                test = _(arr).compact()

            buster.assert.equals(test, [1, 2, 3])
        }
    },

    'flatten()': {
        'should flatten a nested array (the nesting can be to any depth)': function(){
            var arr = [1, [2], [3, [[4]]]],
                test = _(arr).flatten()

            buster.assert.equals(test, [1, 2, 3, 4])
        },

        'should flatten a nested array only a single level if shallow is passed': function(){
            var arr = [1, [2], [3, [[4]]]],
                test = _(arr).flatten(true)

            buster.assert.equals(test, [1, 2, 3, [[4]]])
        }
    },

    'difference()': {
        'should return the values from array that are not present in the other arrays': function(){
            var arr = [1, 2, 3, 4, 5],
                other = [5, 2, 10],
                test = _(arr).difference(other, other)

            buster.assert.equals(test, [1,3,4])
        }
    },

    'without()': {
        'should return a copy of the array with all instances of the values removed': function(){
            var arr = [1, 2, 1, 0, 3, 1, 4],
                test = _(arr).without(0, 1)

            buster.assert.equals(test, [2,3,4])
        }
    },

    'uniq()': {
        'should return a duplicate-free version of the array': {
            'by default': function(){
                var arr = [1, 2, 1, 3, 1, 4],
                    test = _(arr).uniq()

                buster.assert.equals(test, [1,2,3,4])
            },

            'faster when isSorted is passed, with the knowledge that the array is already sorted': function(){
                var arr = [1, 1, 1, 2, 3, 4],
                    test = _(arr).uniq(true)

                buster.assert.equals(test, [1,2,3,4])
            },

            'where computed uniq items are based on a transformation when an iterator is passed': function(){
                var arr = [{name:'moe'}, {name:'curly'}, {name:'larry'}, {name:'curly'}],
                    iterator = function(value) {return value.name },
                    test = _(arr).uniq(false, iterator).map(iterator).join(', ')

                buster.assert.equals(test, 'moe, curly, larry')
            },

            'where isSorted works with iterator': function(){
                var arr = [1, 2, 2, 3, 4, 4],
                    iterator = function(value) { return value +1 },
                    test = _(arr).uniq(true, iterator).join(', ')

                buster.assert.equals(test, '1, 2, 3, 4')
            }
        }
    },

    'union()': {
        'should return an array consisting of unique items, in order, that are present in one or more arrays': {
            'taking a list of arrays': function(){
                var arr = [1, 2, 3],
                    test = _(arr).union([2, 30, 1], [1, 40])

                buster.assert.equals(test, [1,2,3,30,40])
            },

            'taking the union of a list of nested arrays': function(){
                var arr = [1, 2, 3],
                    test = _(arr).union([2, 30, 1], [1, 40, [1]])

                buster.assert.equals(test, [1, 2, 3, 30, 40, [1]])
            }
        }
    },

    'intersection()': {
        // 'can take the set of intersection of two arrays': function(){
        //     var stooges = ['moe', 'curly', 'larry'], leaders = ['moe', 'groucho']
        //     buster.assert.equals(_.intersection(leaders).join(''), 'moe')
        // },

        'can perform an OO-style intersection': function(){
            var stooges = ['moe', 'curly', 'larry'], leaders = ['moe', 'groucho']
            buster.assert.equals(_(stooges).intersection(leaders).join(''), 'moe')
        }

        // 'works on an arguments object': function(){
        //     var stooges = ['moe', 'curly', 'larry'], leaders = ['moe', 'groucho'],
        //         result = (function(){ return _(arguments).intersection(leaders) }).apply(null, stooges)

        //     buster.assert.equals(result.join(''), 'moe')
        // }
    },

    'zip()': {
        'zipped together arrays of different lengths': function(){
            var names = ['moe', 'larry', 'curly'], ages = [30, 40, 50], leaders = [true]
            // var stooges = _.zip(names, ages, leaders)
            var stooges = _(names).zip(ages, leaders)
            buster.assert.equals(String(stooges), 'moe,30,true,larry,40,,curly,50,')
        }
    },

    'pluck()': {
        'pulls names out of objects': function(){
            var people = [{name : 'moe', age : 30}, {name : 'curly', age : 50}]
            buster.assert.equals(_(people).pluck('name').join(', '), 'moe, curly')
        }
    },

    // 'max()': {
    //     'can perform a regular Math.max': function(){
    //         buster.assert.equals(3, _([1, 2, 3]).max())
    //     },

    //     'can perform a computation-based max': function(){
    //         var neg = _([1, 2, 3]).max(function(num){ return -num })
    //         buster.assert.equals(neg, 1)
    //     },

    //     // 'Maximum value of an empty object': function(){
    //     //     buster.assert.equals(-Infinity, _({}).max())
    //     // },

    //     'Maximum value of an empty array': function(){
    //         buster.assert.equals(-Infinity, _([]).max())
    //     },

    //     // 'Maximum value of a non-numeric collection': function(){
    //     //     buster.assert.equals(_.max({'a': 'a'}), -Infinity)
    //     // },

    //     'Maximum value of a too-big array': function(){
    //         buster.assert.equals(299999, _.max(_.range(1, 300000)))
    //     }
    // },

    'object()': {
        'two arrays zipped together into an object': function(){
            var result = _(['moe', 'larry', 'curly']).object([30, 40, 50]),
                shouldBe = {moe: 30, larry: 40, curly: 50}

            buster.assert.equals(result, shouldBe)
        },

        'an array of pairs zipped together into an object': function(){
            var result = _([['one', 1], ['two', 2], ['three', 3]]).object(),
                shouldBe = {one: 1, two: 2, three: 3}

            buster.assert.equals(result, shouldBe)
        },

        'an object converted to pairs and back to an object': function(){
            var stooges = {moe: 30, larry: 40, curly: 50}
            buster.assert.equals(_(_(stooges).pairs()).object(), stooges)
        },

        'handles nulls': function(){
            buster.assert.equals(list.object(null), {})
            // ok(_.isEqual(_.object(null), {}), 'handles nulls')
        }
    },

    'sortedIndex()': {
        '35 should be inserted at index 3': function(){
            var numbers = [10, 20, 30, 40, 50], num = 35
            var indexForNum = _(numbers).sortedIndex(num)
            buster.assert.equals(indexForNum, 3)
        },

        '30 should be inserted at index 2': function(){
            var numbers = [10, 20, 30, 40, 50], indexFor30 = _(numbers).sortedIndex(30)
            buster.assert.equals(indexFor30, 2)
        },

        'other': function(){
            var objects = [{x: 10}, {x: 20}, {x: 30}, {x: 40}],
                iterator = function(obj){ return obj.x }
            buster.assert.equals(_(objects).sortedIndex({x: 25}, iterator), 2)
            buster.assert.equals(_(objects).sortedIndex({x: 35}, 'x'), 3)

            var context = {1: 2, 2: 3, 3: 4}
            iterator = function(obj){ return this[obj] }
            buster.assert.equals(_([1, 3]).sortedIndex(2, iterator, context), 1)
        }
    }
})
