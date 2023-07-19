import assert from "assert";

import isFromBellville from '../isFromBellville.js';


describe('Testing the isFromBellville function...' , function(){
    it("that should return 'true' if the regNumber passed is from Bellville, starting with 'CY'" , function(){
        assert.equal(true, isFromBellville("CY"));
    });

    it("that should return 'false' if the regNumber passed is not from Bellville and does not start with 'CY'" , function(){
        assert.equal(true, isFromBellville("CY"));
    });
});