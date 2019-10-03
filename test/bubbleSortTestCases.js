const assert=require("chai").assert;
const utility=require("../Utility/Utility");

describe("test cases for bubble sort",function(){
    let testcase1=utility.bubbleSort(new Array());
    it("array size must be greater than zero",function(){
        assert.equal(testcase1["testcaseresult"],"array size must be greater than zero");
    });

    let testcase2=utility.bubbleSort([1,2,"abc",4,5]);
    it("array element should not be string",function(){
        assert.equal(testcase2["testcaseresult"],"array element should not be string");
    });

    let testcase3=utility.bubbleSort([34,65,77,87,99]);
    it("successully sort array of number by bubble sort",function(){
        assert.equal(testcase3["testcaseresult"],"success");
    });
});