import assert from "assert";

import yearsAgo from '../yearsAgo.js';

describe('Testing a function that takes the current year as a parameter and...' , function(){
    it('returns how long ago that year was from the current date' , function(){
        assert.equal(13,yearsAgo(2010));
    });

    it('returns how long ago that year was from the current date' , function(){
        assert.equal(3,yearsAgo(2020));
    });
});