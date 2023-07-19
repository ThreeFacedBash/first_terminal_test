import assert from "assert";

import regCheck from '../regCheck.js';

describe("Testing if plate numbers are from provinces where the location identifier is at the end such as 'GP', 'L', 'MP'..." , function(){
    it("if the plate number is from such places, the function returns 'true'" , function(){
        assert.equal(true,regCheck('DV 23 NB GP', 'GP'));
    });

    it("if the plate number is not from such places, the function returns 'false'" , function(){
        assert.equal(false,regCheck('CY 189-012', 'CY'));
    });

});