const assert=require('chai').assert;
const utility=require('../Utility/Utility');

describe('test cases for finding roots of quadratic equation',function(){
    //findRoot(a,b,c)=>ax^2+bx+c=0
    let tc1=utility.findRoots("abc",5,0);
    it("ax^2+bx+c=0 in this equation value a should not be string",function(){
        assert.equal(tc1["testcaseresult"],'ax^2+bx+c=0 in this equation value a,b and c should not be string');
    });
    let tc2=utility.findRoots(1,"abc",0);
    it("ax^2+bx+c=0 in this equation value b should not be string",function(){
        assert.equal(tc2["testcaseresult"],'ax^2+bx+c=0 in this equation value a,b and c should not be string');
    });

    let tc3=utility.findRoots(1,5,"abc");
    it("ax^2+bx+c=0 in this equation value c should not be string",function(){
        assert.equal(tc3["testcaseresult"],'ax^2+bx+c=0 in this equation value a,b and c should not be string');
    });

    let tc4=utility.findRoots(0,6,9);
    it("ax^2+bx+c=0 in this equation value a should not be zero",function(){
        assert.equal(tc4["testcaseresult"],'ax^2+bx+c=0 in this equation value a should not be zero');
    });
    let tc5=utility.findRoots(1,0,9);
    it("successfully find roots of an equation",function(){
        assert.equal(tc5["testcaseresult"],'success');
    });
    
});