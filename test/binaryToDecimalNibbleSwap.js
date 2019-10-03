const assert=require("chai").assert;
const utility=require("../Utility/Utility");

describe("test cases for binary to decimal conversion after nibble swapping",function(){
    let testcase1=utility.decimalToBinary(-1);
    it("number should be greater than zero",function(){
        assert.equal(testcase1["testcaseresult"],"number should be greater than zero");
    });

    let testcase2=utility.decimalToBinary(2014);
    it("number should not be less than 512",function(){
        assert.equal(testcase2["testcaseresult"],"number should not be less than 512");
    });

    let testcase3=utility.decimalToBinary("100");
    it("number should not be string",function(){
        assert.equal(testcase3["testcaseresult"],"number should not be string");
    });

    let testcase4=utility.decimalToBinary(100);
    it("successully convert decimal to binary",function(){
        assert.equal(testcase4["testcaseresult"],"success");
    });
});