import assert from "assert";

import fromWhere from '../fromWhere.js';

describe('Testing a function which takes in a string of plate numbers and...' , function(){
    it('returns the area they are from based on the prefix of the plate number' , function(){
        assert.equal('Bellville',fromWhere('CY 567489'));
    });

    it('returns the area they are from based on the prefix of the plate number' , function(){
        assert.equal('Cape Town',fromWhere('CA 987504'));
    });
    
});