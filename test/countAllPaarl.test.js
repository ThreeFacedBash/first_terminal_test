import assert from "assert";

import countAllPaarl from '../countAllPaarl.js';

describe('Testing a function that takes a string as a parameter and...' , function(){
    it('returns all the number plates from Paarl within that string' , function(){
        assert.equal(3,countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('returns all the number plates from Paarl within that string' , function(){
        assert.equal(4,countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CJ 2345, CL 123-546,CK 345, CJ 123'));
    });

});