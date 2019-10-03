const assert=require("chai").assert;
const utility=require("../Utility/Utility");

describe("test cases for finding test cases for permutation",function(){
    let tc1=utility.findPermutation(123,0,3,6);
    it("input value should not be number",function(){
        assert.equal(tc1["testcaseresult"],"input value should not be number");
    });

    let tc2=utility.findPermutation('',0,3,6)
    it("input value should not be of length zero",function(){
        assert.equal(tc2["testcaseresult"],"input value should not be of length zero");
    });
   
    let tc3=utility.findPermutation('abc#',0,2,6)
    it("input value should not be contain special symbol",function(){
        assert.equal(tc3["testcaseresult"],"input value should not be contain special symbol");
    })

    // let tc4=utility.findPermutation('abc',0,2,6);
    // it("successully find permutation of string",function(){
    //     assert.equal(tc4["testcaseresult"],"success");
    // });
});