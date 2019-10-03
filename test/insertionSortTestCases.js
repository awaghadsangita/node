const assert=require("chai").assert;
const utility=require("../Utility/Utility");

describe("test cases for insertion sort",function(){
    let tc1=utility.insertionSort(new Array());
    it("array size must be greater than zero",function(){
        assert.equal(tc1["testcaseresult"],"array size should be greater than zero");
    });

    let tc2=utility.insertionSort(['abc','zyx','pqr','efg',1]);
    it("array element can not be number",function(){
        assert.equal(tc2["testcaseresult"],"array element can not be number");
    });
   
    let tc3=utility.insertionSort(['abc','zyx','pqr','efg','xyz']);
    it("successully sort array of strings by bubble sort",function(){
        assert.equal(tc3["testcaseresult"],"success");
    });
});