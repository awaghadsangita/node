const assert= require('chai').assert;
const utility=require('../Utility/Utility');


describe("test cases for monthly payment ",function(){
    let tc1=utility.calculatemonthlyPayment(-1,5,5);
    it("principal amount should not be less than one",function(){
        assert.equal(tc1["testcaseresult"],"principal amount should not be less than one");
    });

    let tc2=utility.calculatemonthlyPayment(5000,0,5);
    it("number of year should not be less than one",function(){
        assert.equal(tc2["testcaseresult"],"number of year should not be less than one");
    });
  
    let tc3=utility.calculatemonthlyPayment(5000,4,0);
    it("rate of interest should not less than one",function(){
          assert.equal(tc3["testcaseresult"],"rate of interest should not less than one");
    })
    
    let tc4=utility.calculatemonthlyPayment(5000,4,10);
    it("successfully calculated monthly payment",function(){
          assert.equal(tc4["testcaseresult"],"success");
    })
})