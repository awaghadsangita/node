const assert=require('chai').assert;
const utility=require('../Utility/Utility');

describe('test cases for finding day of week',function(){
    //getDayOfWeek(month,day,year)
    let tc1=utility.getDayOfWeek(0,5,2014);
    it("month should be greater than 0",function(){
        assert.equal(tc1["testcaseresult"],'month should be between 1 and 12');
    });
    let tc2=utility.getDayOfWeek(20,5,2014);
    it("month should be less than 12",function(){
        assert.equal(tc2["testcaseresult"],'month should be between 1 and 12');
    });

    let tc3=utility.getDayOfWeek(8,0,2014);
    it("day should be greater than zero",function(){
        assert.equal(tc3["testcaseresult"],'day should be between 1 and 31');
    });

    let tc4=utility.getDayOfWeek(8,42,2014);
    it("day should be less than 31",function(){
        assert.equal(tc4["testcaseresult"],'day should be between 1 and 31');
    });

    let tc5=utility.getDayOfWeek(8,27,2019);
    it("successfully find day of week",function(){
        assert.equal(tc5["testcaseresult"],"success");
    });
});