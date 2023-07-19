import assert from "assert";
import countRegNumber from "../countRegNumber.js";


describe('Testing a function the counts the registration numbers passed in a string and..' , function(){
    it('returns them as an integer' , function(){
        assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });

    it('returns them as an integer' , function(){
        assert.equal(5,countRegNumber('CA 193836,CY 595519,CA 182736,CY 523519,CJ 812328'));
    });

});