const assert= require('chai').assert;
const utility=require('../Utility/Utility');

describe("test cases for sum of adds to zero",function(){
    let result=utility.sumofThreeIntegerAddsZero(new Array());
    it("size of array should not be less than one",function(){
        assert.equal(result["testcaseresult"],"size of array should not be less than one");
    });

    let result1=utility.sumofThreeIntegerAddsZero([5,-3,-2,'abc',8,-7,-1]);
    it("array element should not be string",function(){
        assert.equal(result1["testcaseresult"],"array element should not be string");
    });
  
    let result2=utility.sumofThreeIntegerAddsZero([5,-3,-2,-5,1,4,,8,-7,-1]);
    it("successully find array elements whose sum equal to zero",function(){
          assert.equal(result2["testcaseresult"],"success");
    })

})