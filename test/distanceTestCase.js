const assert=require('chai').assert;
const utility=require('../Utility/Utility');

describe('test cases for finding distance from origin to given point(x,y)',function(){
    //findRoot(a,b,c)=>ax^2+bx+c=0
    let tc1=utility.calculateDistance("abc",4)
    it("in point(x,y) value of x should not be string",function(){
        assert.equal(tc1["testcaseresult"],'value of x and value of y should not be string');
    });
    let tc2=utility.calculateDistance(4,"4")
    it("in point(x,y) value of y should not be string",function(){
        assert.equal(tc2["testcaseresult"],'value of x and value of y should not be string');
    });

    let tc3=utility.calculateDistance(5,12)
    it("successfully find distance between point(0,0) to point(5,12)",function(){
        assert.equal(tc3["testcaseresult"],'success');
    });
    
});