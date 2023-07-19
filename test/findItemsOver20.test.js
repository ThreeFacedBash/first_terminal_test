import assert from "assert";

import findItemsOver20 from "../findItemsOver20.js";

describe('Testing a function that calculates amount of fruits that have a quantity of 20 and...' , function(){
    it("returns an object with the name of the fruit and it's quantity" , function(){
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

        it("returns an object with the name of the fruit and it's quantity" , function(){
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