import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });

    it('should greet Tate correctly', function(){
        assert.equal('Hello, Tate', greet('Tate'));
    });
});

