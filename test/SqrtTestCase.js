const assert= require('chai').assert;
const utility=require('../Utility/Utility');


describe("test cases for squareroot evalution",function(){
    let result=utility.calculateSqaureRoot(-1);
    it("number should not be negative",function(){
        assert.equal(result["testCaseResult"],"number should be non negative");
    });

    let result1=utility.calculateSqaureRoot(0);
    it("number should not be zero",function(){
        assert.equal(result1["testCaseResult"],"number should be non negative");
    });
  
    let result2=utility.calculateSqaureRoot(2);
    it("successully calculated square root",function(){
          assert.equal(result2["testCaseResult"],"success");
    })

})