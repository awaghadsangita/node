const assert=require('chai').assert;
const utility=require('../Utility/Utility');

describe('test cases for WindChill temperature',function(){
    //getDayOfWeek(month,day,year)
    let tc1=utility.calculateWindChill("abc",5)
    it("temperature should not be string",function(){
        assert.equal(tc1["testcaseresult"],'temperature should not be string');
    });
    let tc2=utility.calculateWindChill(5,"abc");
    it("wind speed should not be string",function(){
        assert.equal(tc2["testcaseresult"],'wind speed should not be string');
    });

    let tc3=utility.calculateWindChill(75,25);
    it("temperature should not be greater than 50 in its absolute value",function(){
        assert.equal(tc3["testcaseresult"],'temperature should not be greater than 50 in its absolute value');
    });

    let tc4=utility.calculateWindChill(25,130);
    it("wind speed(v) should not be larger than 120",function(){
        assert.equal(tc4["testcaseresult"],'wind speed(v) should not be larger than 120 or should not be less than 3');
    });

    let tc5=utility.calculateWindChill(25,2);
    it("wind speed(v) should not be less than 3",function(){
        assert.equal(tc5["testcaseresult"],'wind speed(v) should not be larger than 120 or should not be less than 3');
    });

    let tc6=utility.calculateWindChill(25,75);
    it("successfully find windchilltemp",function(){
        assert.equal(tc6["testcaseresult"],"success");
    });
});