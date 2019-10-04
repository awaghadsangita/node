const assert= require('chai').assert;
const utility=require('../TypeScript/AddressBook/implementationAddressbook');


describe("test cases for ​to find whether address book exist or not ",function(){
    let obj=new utility.ImplementationClass();

    let tc1=obj.isExistAddressbook(undefined)
    it("addressbook name should not be undefined",function(){
        assert.equal(tc1.message.toString(),"filename should not be undefined or null");
    });

    let tc2=obj.isExistAddressbook(null)
    it("addressbook name should not be null",function(){
        assert.equal(tc2.message.toString(),"filename should not be undefined or null");
    });

    let tc3=obj.isExistAddressbook("abc");
    it("addressbook name does not exist",function(){
        assert.equal(tc3,true);
    });
    
    let tc4=obj.isExistAddressbook("MH");
    it("addressbook name book exist",function(){
        assert.equal(tc4,true);
    });
})

describe("test cases ​to create new addressbook ",function(){
    let obj=new utility.ImplementationClass();

    let tc1=obj.createAddressBook(undefined)
    it("addressbook name should not be undefined",function(){
        assert.equal(tc1.message.toString(),"filename should not be undefined or null");
    });

    let tc2=obj.createAddressBook(null)
    it("addressbook name should not be null",function(){
        assert.equal(tc2.message.toString(),"filename should not be undefined or null");
    });

    let tc3=obj.createAddressBook("abc");
    it("create addressbook if addressbook name does not exist successfully",function(){
        assert.equal(tc3,"failed");
    });
    
    let tc4=obj.createAddressBook("MH");
    it("does not create addressbook if addressbook name book exist",function(){
        assert.equal(tc4,"failed");
    });
})

describe("test cases for ​to add new person in addressbook ",function(){
    let obj=new utility.ImplementationClass();
    
    it("firstname should not be null",function(){
        let tc1=obj.addPerson(null,"abc", "abc", "jalna", "MH", "432167", "9422329006") 
        assert.equal(tc1.message.toString(),"firstname should not be undefine or null");
    });
   
    it("firstname should not be undefined ",function(){
        let tc2=obj.addPerson(undefined,"abc", "abc", "jalna", "MH", "432167", "9422329006") 
        assert.equal(tc2.message.toString(),"firstname should not be undefine or null");
    });
    
    it("firstname should not contain digit ",function(){
        let tc3=obj.addPerson("sangita134","abc", "abc", "jalna", "MH", "432167", "9422329006") 
        assert.equal(tc3.message.toString(),"firstname must contains letters only and must be atleast 2 character long");
    });
    
    
    it("firstname should contain at least two digit ",function(){
        let tc4=obj.addPerson("a","abc", "abc", "jalna", "MH", "432167", "9422329006") 
        assert.equal(tc4.message.toString(),"firstname must contains letters only and must be atleast 2 character long");
    });
    
    it("lastname should not be null",function(){
        let tc5=obj.addPerson("abc",null, "abc", "jalna", "MH", "432167", "9422329006") 
         assert.equal(tc5.message.toString(),"lastname should not be undefine or null");
    });
    
    
    it("lastname should not be undefined ",function(){
        let tc6=obj.addPerson("abc",undefined, "abc", "jalna", "MH", "432167", "9422329006") 
        assert.equal(tc6.message.toString(),"lastname should not be undefine or null");
    });

    it("lastname should not contains digit ",function(){
        let tc7=obj.addPerson("abc","abc123", "abc", "jalna", "MH", "432167", "9422329006") 
        assert.equal(tc7.message.toString(),"lastname must contains letters only and must be atleast 2 character long");
    });
    
    it("lastname should contains at atleast two characters ",function(){
        let tc8=obj.addPerson("abc","a", "abc", "jalna", "MH", "432167", "9422329006") 
        assert.equal(tc8.message.toString(),"lastname must contains letters only and must be atleast 2 character long");
    });

    it("address should not be null",function(){
        let tc9=obj.addPerson("abc","abc", null, "jalna", "MH", "432167", "9422329006") 
         assert.equal(tc9.message.toString(),"address should not be undefined or null");
    });
    
    
    it("address should not be undefined ",function(){
        let tc10=obj.addPerson("abc","abc", undefined, "jalna", "MH", "432167", "9422329006") 
        assert.equal(tc10.message.toString(),"address should not be undefined or null");
    });
    
       
    it("address should contains at atleast two characters ",function(){
        let tc11=obj.addPerson("abc","abac", "a", "jalna", "MH", "432167", "9422329006") 
        assert.equal(tc11.message.toString(),"address must be atleast 2 character long");
    });

    it("city should not be null",function(){
        let tc12=obj.addPerson("abc","abc", "abc01", null, "MH", "432167", "9422329006") 
         assert.equal(tc12.message.toString(),"city should not be undefined or null");
    });
    
    
    it("city should not be undefined ",function(){
        let tc13=obj.addPerson("abc","abc", "abc-01,old jalna",undefined, "MH", "432167", "9422329006") 
        assert.equal(tc13.message.toString(),"city should not be undefined or null");
    });
    
       
    it("city should contains at atleast two characters ",function(){
        let tc14=obj.addPerson("abc","abac", "abacb", "a", "MH", "432167", "9422329006") 
        assert.equal(tc14.message.toString(),"city must contains letters only and must be atleast 2 character long");
    });
    it("state should not be null",function(){
        let tc12=obj.addPerson("abc","abc", "abc01", "jalna", null, "432167", "9422329006") 
         assert.equal(tc12.message.toString(),"state should not be undefined or null");
    });
    
    
    it("state should not be undefined ",function(){
        let tc13=obj.addPerson("abc","abc", "abc-01,old jalna","jalna", undefined, "432167", "9422329006") 
        assert.equal(tc13.message.toString(),"state should not be undefined or null");
    });
    
       
    it("state should contains at atleast two characters ",function(){
        let tc14=obj.addPerson("abc","abac", "abacb", "jalna", "M", "432167", "9422329006") 
        assert.equal(tc14.message.toString(),"state must contains letters only and must be atleast 2 character long");
    });

    it("zipcode should not be null",function(){
        let tc12=obj.addPerson("abc","abc", "abc01", "jalna", "MH", null, "9422329006") 
         assert.equal(tc12.message.toString(),"zip should not be undefined or null");
    });
    
    
    it("zipcode should not be undefined ",function(){
        let tc13=obj.addPerson("abc","abc", "abc-01,old jalna","jalna", "MH", undefined, "9422329006") 
        assert.equal(tc13.message.toString(),"zip should not be undefined or null");
    });
    
       
    it("zipcode should contains less than 6 digit ",function(){
        let tc14=obj.addPerson("abc","abac", "abacb", "jalna", "MH", "43216", "9422329006") 
        assert.equal(tc14.message.toString(),"zip must be 6 digit long");
    });

    it("zipcode should contains more than 6 digit ",function(){
        let tc14=obj.addPerson("abc","abac", "abacb", "jalna", "MH", "43299916", "9422329006") 
        assert.equal(tc14.message.toString(),"zip must be 6 digit long");
    });
    it("mobile number should not be null",function(){
        let tc12=obj.addPerson("abc","abc", "abc01", "jalna", "MH", "456321", null) 
         assert.equal(tc12.message.toString(),"mobile number should not be undefined or null");
    });
    
    
    it("mobile number should not be undefined ",function(){
        let tc13=obj.addPerson("abc","abc", "abc-01,old jalna","jalna", "MH", "456321", undefined) 
        assert.equal(tc13.message.toString(),"mobile number should not be undefined or null");
    });
    
       
    it("mobile number should start with 7,8 or 9",function(){
        let tc14=obj.addPerson("abc","abac", "abacb", "jalna", "MH", "432165", "6422329006") 
        assert.equal(tc14.message.toString(),"phone number must start with 7,8 or 9 and must be 10 digit long");
    });

    it("mobile number must contains 10 digit ",function(){
        let tc14=obj.addPerson("abc","abac", "abacb", "jalna", "MH", "432999", "942232900655") 
        assert.equal(tc14.message.toString(),"phone number must start with 7,8 or 9 and must be 10 digit long");
    });
})

describe("test cases for ​to find person in addressbook ",function(){
    let obj=new utility.ImplementationClass();
    
    it("person id should not be null",function(){
        let tc1=obj.findPerson(undefined);
        assert.equal(tc1.message.toString(),"person registration id should not be undefined or null");
    });
    
    it("person id should not be undefined",function(){
        let tc2=obj.findPerson(null);
        assert.equal(tc2.message.toString(),"person registration id should not be undefined or null");
    });


    it("Registration id must be positive number",function(){
        let tc3=obj.findPerson(-1);
        assert.equal(tc3.message.toString(),"Registration id must be positive number");
    });
})


describe("test cases for ​to update address in addressbook ",function(){
    let obj=new utility.ImplementationClass();

    it("Array index should not be null",function(){
        let tc12=obj.updateAddress(null, "abc01", "jalna", "MH", "456321") 
         assert.equal(tc12.message.toString(),"array index should not be undefined or null");
    });
    
    
    it("array index should not be undefined ",function(){
        let tc13=obj.updateAddress(undefined, "abc-01,old jalna","jalna", "MH", "456321") 
        assert.equal(tc13.message.toString(),"array index should not be undefined or null");
    });
    
       
    it("array index should be positive number",function(){
        let tc14=obj.updateAddress(-144,"abc11", "jalna", "MH", "432165") 
        assert.equal(tc14.message.toString(),"array index must be positive number");
    });

    it("address should not be null",function(){
        let tc9=obj.updateAddress(1, null, "jalna", "MH", "432167") 
         assert.equal(tc9.message.toString(),"address should not be undefined or null");
    });
    
    
    it("address should not be undefined ",function(){
        let tc10=obj.updateAddress(1, undefined, "jalna", "MH", "432167") 
        assert.equal(tc10.message.toString(),"address should not be undefined or null");
    });
           
    it("address should contains at atleast two characters ",function(){
        let tc11=obj.updateAddress(1,"a", "jalna", "MH", "432167") 
        assert.equal(tc11.message.toString(),"address must be atleast 2 character long");
    });

    it("city should not be null",function(){
        let tc12=obj.updateAddress(1 ,"abc01", null, "MH", "432167") 
         assert.equal(tc12.message.toString(),"city should not be undefined or null");
    });
    
    
    it("city should not be undefined ",function(){
        let tc13=obj.updateAddress(1, "abc-01,old jalna",undefined, "MH", "432167") 
        assert.equal(tc13.message.toString(),"city should not be undefined or null");
    });
    
       
    it("city should contains at atleast two characters ",function(){
        let tc14=obj.updateAddress(1,"abac", "a", "MH", "432167") 
        assert.equal(tc14.message.toString(),"city must contains letters only and must be atleast 2 character long");
    });
    it("state should not be null",function(){
        let tc12=obj.updateAddress(1, "abc01", "jalna", null, "432167") 
         assert.equal(tc12.message.toString(),"state should not be undefined or null");
    });
    
    
    it("state should not be undefined ",function(){
        let tc13=obj.updateAddress(1, "abc-01,old jalna","jalna", undefined, "432167",) 
        assert.equal(tc13.message.toString(),"state should not be undefined or null");
    });
    
       
    it("state should contains at atleast two characters ",function(){
        let tc14=obj.updateAddress(1, "abacb", "jalna", "M", "432167") 
        assert.equal(tc14.message.toString(),"state must contains letters only and must be atleast 2 character long");
    });

    it("zipcode should not be null",function(){
        let tc12=obj.updateAddress(1, "abc01", "jalna", "MH", null) 
         assert.equal(tc12.message.toString(),"zip should not be undefined or null");
    });
    
    
    it("zipcode should not be undefined ",function(){
        let tc13=obj.updateAddress(1, "abc-01,old jalna","jalna", "MH", undefined) 
        assert.equal(tc13.message.toString(),"zip should not be undefined or null");
    });
    
       
    it("zipcode should contains less than 6 digit ",function(){
        let tc14=obj.updateAddress(1, "abacb", "jalna", "MH", "43216") 
        assert.equal(tc14.message.toString(),"zip must be 6 digit long");
    });

    it("zipcode should contains more than 6 digit ",function(){
        let tc14=obj.updateAddress(1, "abacb", "jalna", "MH", "43299916", "9422329006") 
        assert.equal(tc14.message.toString(),"zip must be 6 digit long");
    });
})

describe("test cases for ​update phone number in addressbook ",function(){
    let obj=new utility.ImplementationClass();
    it("Array index should not be null",function(){
        let tc12=obj.updatePhone(null,"9422329006") 
         assert.equal(tc12.message.toString(),"array index should not be undefined or null");
    });
    
    
    it("array index should not be undefined ",function(){
        let tc13=obj.updatePhone(undefined,"9422329006") 
        assert.equal(tc13.message.toString(),"array index should not be undefined or null");
    });
    
       
    it("array index should be positive number",function(){
        let tc14=obj.updatePhone(-144,"9422329006") 
        assert.equal(tc14.message.toString(),"array index must be positive number");
    });
    
    it("mobile number should not be null",function(){
        let tc12=obj.updatePhone(122, null) 
         assert.equal(tc12.message.toString(),"mobile number should not be undefined or null");
    });
    
    
    it("mobile number should not be undefined ",function(){
        let tc13=obj.updatePhone(122, undefined) 
        assert.equal(tc13.message.toString(),"mobile number should not be undefined or null");
    });
    
       
    it("mobile number should start with 7,8 or 9",function(){
        let tc14=obj.updatePhone(122, "6422329006") 
        assert.equal(tc14.message.toString(),"phone number must start with 7,8 or 9 and must be 10 digit long");
    });

    it("mobile number must contains 10 digit ",function(){
        let tc14=obj.updatePhone(122, "942232900655") 
        assert.equal(tc14.message.toString(),"phone number must start with 7,8 or 9 and must be 10 digit long");
    });
})

describe("test cases for ​deleting person from addressbook ",function(){
    let obj=new utility.ImplementationClass();
    it("registration id should not be null",function(){
        let tc12=obj.deletePerson(null) 
         assert.equal(tc12.message.toString(),"Registration id should not be undefined or null");
    });
    
    
    it("registration id should not be undefined",function(){
        let tc13=obj.deletePerson(undefined) 
        assert.equal(tc13.message.toString(),"Registration id should not be undefined or null");
    });
    
       
    it("registration id must be positive number",function(){
        let tc14=obj.deletePerson(-144) 
        assert.equal(tc14.message.toString(),"Registration id must be positive number");
    });
    
    it("registration id does not exist",function(){
        obj.isExistAddressbook("MH")
        let tc14=obj.deletePerson(25) 
        assert.equal(tc14.message.toString(),"Registration Id does not Exist");
    });
    
})

