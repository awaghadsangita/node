const assert=require('chai').assert;
const utility=require('../Utility/Utility');

describe("test cases finding prime numbers in the range",function(){
    let tc1=utility.getPrimeNumber('sangita',1000)
    it("starting point should be number",function(){
        assert.equal(tc1,'starting and ending point should be number');
    });
    let tc2=utility.getPrimeNumber(0,'sangita')
    it("ending point should be number",function(){
        assert.equal(tc2,'starting and ending point should be number');
    });

    let tc3=utility.getPrimeNumber(1000,0)
    it("end point should not be less than start point in the range",function(){
        assert.equal(tc3,'end point should not be less than start point in the range');
    });

});