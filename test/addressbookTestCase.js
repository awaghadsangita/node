const assert=require('chai').assert;
const addressbookUtility=require('../ObjectOriented/AddressBook/AddressBookUtility');
describe('test cases for open existing address book',function(){
    let classObj1=new addressbookUtility.AddressBookUtility();
    let tc1=classObj1.openAddressBook(null);
    it('addressbook name should not be null',function(){
        assert.equal(tc1.message.toString(),'name should not be null')
    });

    let classObj2=new addressbookUtility.AddressBookUtility();
    let tc2=classObj2.openAddressBook(undefined);
    it('addressbook name should not be undefined',function(){
        assert.equal(tc2.message.toString(),'name should not be undefined')
    });
    let classObj3=new addressbookUtility.AddressBookUtility();
    let tc3=classObj3.openAddressBook(123);
    it('addressbook name should not be numberic',function(){
        assert.equal(tc3.message.toString(),'name should be string')
    });
    let classObj4=new addressbookUtility.AddressBookUtility();
    let tc4=classObj4.openAddressBook('gujrat');
    it('successfully open addressbook',function(){
        assert.notEqual(tc4,'name should contain letters only')
    });
});

describe('test cases for adding person to address book',function(){
    let classObj1=new addressbookUtility.AddressBookUtility();
    let tc1=classObj1.addPerson(null,'awaghad','madhuban colony','jalna','maharshtra',431203,9422329006);
    it('first name should not be null',function(){
        assert.equal(tc1.message.toString(),'first name should not be null')
    });

    let classObj2=new addressbookUtility.AddressBookUtility();
    let tc2=classObj2.addPerson(undefined,'awaghad','madhuban colony','jalna','maharshtra',431203,9422329006);
    it('first name should not be undefined',function(){
        assert.equal(tc2.message.toString(),'first name should not be undefined')
    });
    let classObj3=new addressbookUtility.AddressBookUtility();
    let tc3=classObj3.addPerson('sangita',null,'madhuban colony','jalna','maharshtra',431203,9422329006);
    it('last name should not be null',function(){
        assert.equal(tc3.message.toString(),'last name should not be null');
    });
    let classObj4=new addressbookUtility.AddressBookUtility();
    let tc4=classObj4.addPerson('sangita',undefined,'madhuban colony','jalna','maharshtra',431203,9422329006);
    it('last name should not be undefined',function(){
        assert.equal(tc4.message.toString(),'last name should not be undefined')
    });

    let classObj5=new addressbookUtility.AddressBookUtility();
    let tc5=classObj5.addPerson('sangita','awaghad',12345,'jalna','maharshtra',431203,9422329006);
    it('successfully take address ',function(){
        assert.notEqual(tc5.message.toString(),'address may contain space - and must be alphanumeric')
    });

    let classObj6=new addressbookUtility.AddressBookUtility();
    let tc6=classObj6.addPerson('sangita','awaghad',12345,undefined,'maharshtra',431203,9422329006);
    it('city should not be undefined ',function(){
        assert.equal(tc6.message.toString(),'city should not be undefined')
    });
    let classObj7=new addressbookUtility.AddressBookUtility();
    let tc7=classObj7.addPerson('sangita','awaghad',12345,null,'maharshtra',431203,9422329006);
    it('city should not be null ',function(){
        assert.equal(tc7.message.toString(),'city should not be null')
    });
    let classObj8=new addressbookUtility.AddressBookUtility();
    let tc8=classObj8.addPerson('sangita','awaghad',12345,12345,'maharshtra',431203,9422329006);
    it('city should be string ',function(){
        assert.equal(tc8.message.toString(),'city should be string')
    });

    let classObj9=new addressbookUtility.AddressBookUtility();
    let tc9=classObj9.addPerson('sangita','awaghad',12345,'jalna',null,431203,9422329006);
    it('state should not be null',function(){
        assert.equal(tc9.message.toString(),'state should not be null')
    });
    let classObj10=new addressbookUtility.AddressBookUtility();
    let tc10=classObj10.addPerson('sangita','awaghad',12345,'jalna',undefined,431203,9422329006);
    it('state should not be undefined',function(){
        assert.equal(tc10.message.toString(),'state should not be undefined')
    });
    let classObj11=new addressbookUtility.AddressBookUtility();
    let tc11=classObj11.addPerson('sangita','awaghad',12345,'jalna',12345,431203,9422329006);
    it('state should be string',function(){
        assert.equal(tc11.message.toString(),'state should be string')
    });

    let classObj12=new addressbookUtility.AddressBookUtility();
    let tc12=classObj12.addPerson('sangita','awaghad',12345,'jalna','MH',020343,9422329006);
    it('zip should be 6 digit long',function(){
        assert.equal(tc12.message.toString(),'zip should be 6 digit long')
    });

    let classObj13=new addressbookUtility.AddressBookUtility();
    let tc13=classObj13.addPerson('sangita','awaghad',12345,'jalna','MH',413203,2422329006);
    it('phone number should start with 7,8 or 9 and must be 10 digit long',function(){
        assert.equal(tc13.message.toString(),'phone number should start with 7,8 or 9 and must be 10 digit long')
    });
    let classObj14=new addressbookUtility.AddressBookUtility();
    let tc14=classObj14.addPerson('sangita','awaghad',12345,'jalna','MH',413203,null);
    it('phone number should not be null',function(){
        assert.equal(tc14.message.toString(),'phone number should start with 7,8 or 9 and must be 10 digit long')
    });
    let classObj15=new addressbookUtility.AddressBookUtility();
    let tc15=classObj15.addPerson('sangita','awaghad',12345,'jalna','MH',413203,undefined);
    it('phone number should not be null',function(){
        assert.equal(tc15.message.toString(),'phone number should start with 7,8 or 9 and must be 10 digit long')
    });

});

describe('test cases for updating address of person',function(){
    let classObj=new addressbookUtility.AddressBookUtility();
    let tc=classObj.updateAddress(null,'sangita','awaghad','madhuban colony','jalna','maharshtra',431203,9422329006);
    it('person id should not be null',function(){
        assert.equal(tc.message.toString(),'pid should be number')
    });
    let classObj01=new addressbookUtility.AddressBookUtility();
    let tc01=classObj01.updateAddress(undefined,'sangita','awaghad','madhuban colony','jalna','maharshtra',431203,9422329006);
    it('person id should not be undefined',function(){
        assert.equal(tc01.message.toString(),'pid should be number')
    });
    
    let classObj1=new addressbookUtility.AddressBookUtility();
    let tc1=classObj1.updateAddress(1,null,'awaghad','madhuban colony','jalna','maharshtra',431203,9422329006);
    it('first name should not be null',function(){
        assert.equal(tc1.message.toString(),'first name should not be null')
    });

    let classObj2=new addressbookUtility.AddressBookUtility();
    let tc2=classObj2.updateAddress(1,undefined,'awaghad','madhuban colony','jalna','maharshtra',431203,9422329006);
    it('first name should not be undefined',function(){
        assert.equal(tc2.message.toString(),'first name should not be undefined')
    });
    let classObj3=new addressbookUtility.AddressBookUtility();
    let tc3=classObj3.updateAddress(1,'sangita',null,'madhuban colony','jalna','maharshtra',431203,9422329006);
    it('last name should not be null',function(){
        assert.equal(tc3.message.toString(),'last name should not be null');
    });
    let classObj4=new addressbookUtility.AddressBookUtility();
    let tc4=classObj4.updateAddress(2,'sangita',undefined,'madhuban colony','jalna','maharshtra',431203,9422329006);
    it('last name should not be undefined',function(){
        assert.equal(tc4.message.toString(),'last name should not be undefined')
    });

    let classObj5=new addressbookUtility.AddressBookUtility();
    let tc5=classObj5.updateAddress(1,'sangita','awaghad',12345,'jalna','maharshtra',431203,9422329006);
    it('successfully take address ',function(){
        assert.notEqual(tc5.message.toString(),'address may contain space - and must be alphanumeric')
    });

    let classObj6=new addressbookUtility.AddressBookUtility();
    let tc6=classObj6.updateAddress(1,'sangita','awaghad',12345,undefined,'maharshtra',431203,9422329006);
    it('city should not be undefined ',function(){
        assert.equal(tc6.message.toString(),'city should not be undefined')
    });
    let classObj7=new addressbookUtility.AddressBookUtility();
    let tc7=classObj7.updateAddress(1,'sangita','awaghad',12345,null,'maharshtra',431203,9422329006);
    it('city should not be null ',function(){
        assert.equal(tc7.message.toString(),'city should not be null')
    });
    let classObj8=new addressbookUtility.AddressBookUtility();
    let tc8=classObj8.updateAddress(1,'sangita','awaghad',12345,12345,'maharshtra',431203,9422329006);
    it('city should be string ',function(){
        assert.equal(tc8.message.toString(),'city should be string')
    });

    let classObj9=new addressbookUtility.AddressBookUtility();
    let tc9=classObj9.updateAddress(1,'sangita','awaghad',12345,'jalna',null,431203,9422329006);
    it('state should not be null',function(){
        assert.equal(tc9.message.toString(),'state should not be null')
    });
    let classObj10=new addressbookUtility.AddressBookUtility();
    let tc10=classObj10.updateAddress(1,'sangita','awaghad',12345,'jalna',undefined,431203,9422329006);
    it('state should not be undefined',function(){
        assert.equal(tc10.message.toString(),'state should not be undefined')
    });
    let classObj11=new addressbookUtility.AddressBookUtility();
    let tc11=classObj11.updateAddress(1,'sangita','awaghad',12345,'jalna',12345,431203,9422329006);
    it('state should be string',function(){
        assert.equal(tc11.message.toString(),'state should be string')
    });

    let classObj12=new addressbookUtility.AddressBookUtility();
    let tc12=classObj12.updateAddress(1,'sangita','awaghad',12345,'jalna','MH',020343,9422329006);
    it('zip should be 6 digit long',function(){
        assert.equal(tc12.message.toString(),'zip should be 6 digit long')
    });

});