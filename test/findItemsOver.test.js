import assert from "assert";

import findItemsOver20 from '../findItemsOver20.js';

describe('Testing a function that measures the quantity of fruits and...' , function(){
    it('returns the fruits that have a quantity higher than the threshold' , function(){
      //  assert.equal(2,2);
      assert.deepEqual([
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ], findItemsOver20([
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ]))
    });

    it('returns the fruits that have a quantity higher than the threshold' , function(){
        assert.deepEqual([
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ], findItemsOver20([
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ]))
        });

});