import assert from "assert";

import isWeekday from '../isWeekday.js';

describe('Testing a function that tests the string passed is a weekday and...' , function(){
    it("returns 'true' if it is a weekday" , function(){
        assert.equal(true,isWeekday("Monday"));
    });

    it("returns 'false' if it is not a weekday" , function(){
        assert.equal(false,isWeekday("Sunday"));
    });


});