const assert= require('chai').assert;
const utility=require('../Utility/Utility');


describe("test cases for ​ temperatur Conversion ",function(){
    let tc1=utility.convertTemperatur("abc",'F');
    it("temperatur should not be string",function(){
        assert.equal(tc1["testcaseresult"],"temperatur should not be string");
    });

    let tc2=utility.convertTemperatur(34,'F');
    it("successfully converted fahrenheit into celcius and viceversa ",function(){
          assert.equal(tc2["testcaseresult"],"success");
    })
})