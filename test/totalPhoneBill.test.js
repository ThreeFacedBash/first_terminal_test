import assert from "assert";

import totalPhoneBill from '../totalPhoneBill.js';


describe("Testing a function that calculates the phone total bill accumulated through calls and sms's and..." , function(){
    it("returns the total as a two point integer with 'R' as a prefix" , function(){
        assert.equal('R7.45',totalPhoneBill('call, sms, call, sms, sms'));
    });

    it("returns the total as a two point integer with 'R' as a prefix" , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

});