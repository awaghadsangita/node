const assert=require('chai').assert;
const utility=require('../Utility/Utility');

describe('test cases for vending machine',function(){
    let tc2=utility.getChange("abc");
    it("amount should not be string",function(){
        assert.equal(tc2["testcaseresult"],'amount should not be string');
    });
    let tc3=utility.getChange(-1);
    it("amount should be greater than zero",function(){
        assert.equal(tc3["testcaseresult"],"amount should be greater than zero");
    });

    let tc4=utility.getChange(4531);
    it("successfully gives change for given amount",function(){
        assert.equal(tc4["testcaseresult"],"success");
    });
});