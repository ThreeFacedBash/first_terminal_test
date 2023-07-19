import assert from "assert";

import countAllFromTown from '../countAllFromTown.js';

describe('Testing a function that takes a string of various numbers plates and...' , function(){
    it('returns the number of plates from the same town within the string' , function(){
        assert.equal(1,countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
    });

    it('returns the number of plates from the same town within the string' , function(){
        assert.equal(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });


    
});