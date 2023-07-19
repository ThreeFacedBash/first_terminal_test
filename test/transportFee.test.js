import assert from "assert";

import transportFee from '../transportFee.js';

describe('Testing a function that calculates the transport fee depending on the shift a employee is working and...' , function(){
    it('returns the amount as an intger' , function(){
        assert.equal('R20',transportFee('morning'));
    });

    it("returns a 'free' statement if it is nightshift" , function(){
        assert.equal('free',transportFee('nightshift'));
    });
});