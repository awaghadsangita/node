const assert= require('chai').assert;
const utility=require('../TypeScript/CommercialDataProcessing/Operationutility')

describe("test cases for buy operation of commercial data processing ",function(){
    let obj=new utility.OperationUtility();
    it("stock symbol should not be null",function(){
        let tc1=obj.buy(null, 5, 1); 
         assert.equal(tc1.message.toString(),"stock symbol should not be null or undefined");
    });
        
    it("stock symbol should not be undefined",function(){
        let tc2=obj.buy(undefined, 5, 1); 
        assert.equal(tc2.message.toString(),"stock symbol should not be null or undefined");
    });
    
    it("stock symbol should not contained special symbol",function(){
        let tc1=obj.buy("T$", 5, 1); 
         assert.equal(tc1.message.toString(),"stock symbol should not contained special symbol");
    });
        
    it("number shares should be number",function(){
        let tc2=obj.buy("T", "5", 1); 
        assert.equal(tc2.message.toString(),"number shares should be number");
    });

    it("number of shares should not be null",function(){
        let tc1=obj.buy("T", null, 1); 
         assert.equal(tc1.message.toString(),"number of shares should not be null or undefined");
    });
        
    it("number of shares should not be undefined",function(){
        let tc2=obj.buy("T", undefined, 1); 
        assert.equal(tc2.message.toString(),"number of shares should not be null or undefined");
    });

    it("person id should be number",function(){
        let tc1=obj.buy("T", 5, "1"); 
         assert.equal(tc1.message.toString(),"person id should be number");
    });
        
    it("person id should not be null",function(){
        let tc2=obj.buy("T", 5, null); 
        assert.equal(tc2.message.toString(),"person id should not be null or undefined");
    });
       
    it("person id should not be undefined",function(){
        let tc2=obj.buy("T", 5, undefined); 
        assert.equal(tc2.message.toString(),"person id should not be null or undefined");
    });
    
});

describe("test cases for sell operation of commercial data processing ",function(){
    let obj=new utility.OperationUtility();
    it("stock symbol should not be null",function(){
        let tc1=obj.sell(null, 5, 1); 
         assert.equal(tc1.message.toString(),"stock symbol should not be null or undefined");
    });
        
    it("stock symbol should not be undefined",function(){
        let tc2=obj.sell(undefined, 5, 1); 
        assert.equal(tc2.message.toString(),"stock symbol should not be null or undefined");
    });
    
    it("stock symbol should not contained special symbol",function(){
        let tc1=obj.sell("T$", 5, 1); 
         assert.equal(tc1.message.toString(),"stock symbol should not contained special symbol");
    });
        
    it("number shares should be number",function(){
        let tc2=obj.sell("T", "5", 1); 
        assert.equal(tc2.message.toString(),"number shares should be number");
    });

    it("number of shares should not be null",function(){
        let tc1=obj.sell("T", null, 1); 
         assert.equal(tc1.message.toString(),"number of shares should not be null or undefined");
    });
        
    it("number of shares should not be undefined",function(){
        let tc2=obj.sell("T", undefined, 1); 
        assert.equal(tc2.message.toString(),"number of shares should not be null or undefined");
    });

    it("person id should be number",function(){
        let tc1=obj.sell("T", 5, "1"); 
         assert.equal(tc1.message.toString(),"person id should be number");
    });
        
    it("person id should not be null",function(){
        let tc2=obj.sell("T", 5, null); 
        assert.equal(tc2.message.toString(),"person id should not be null or undefined");
    });
       
    it("person id should not be undefined",function(){
        let tc2=obj.sell("T", 5, undefined); 
        assert.equal(tc2.message.toString(),"person id should not be null or undefined");
    });
    
});

describe("test cases for saving json object array into json file of commercial data processing ",function(){
    let obj=new utility.OperationUtility();
    it("filename should not be null",function(){
        let tc1=obj.saveFile(null,[{"name":"sangita","balance":50000}]); 
         assert.equal(tc1.message.toString(),"filename should not be null or undefined");
    });
        
    it("filename should not be undefined",function(){
        let tc2=obj.saveFile(null,[{"name":"sangita","balance":50000}]); 
        assert.equal(tc2.message.toString(),"filename should not be null or undefined");
    });
    it("jsonobject array should not be null",function(){
        let tc1=obj.saveFile("./person.json",null); 
         assert.equal(tc1.message.toString(),"json array should not be null or undefined");
    });
        
    it("jsonobject array not be undefined",function(){
        let tc2=obj.saveFile("./person.json",undefined); 
        assert.equal(tc2.message.toString(),"json array should not be null or undefined");
    });
});