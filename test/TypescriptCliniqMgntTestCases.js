const assert= require('chai').assert;
const utility=require('../TypeScript/CliniqueManagementProgramme/implementationClass')

describe("test cases for ​finding appointment date of doctor ",function(){
    let obj=new utility.ImplementationClass();
    it("array index should not be null",function(){
        let tc1=obj.findAppointmentDate(null) 
         assert.equal(tc1.message.toString(),"array index should not be null or undefined");
    });
    
    
    it("array index should not be undefined",function(){
        let tc2=obj.findAppointmentDate(undefined) 
        assert.equal(tc2.message.toString(),"array index should not be null or undefined");
    });
    
       
    it("successfully find appointment date",function(){
        let tc3=obj.findAppointmentDate(1) 
        assert.equal(typeof tc3,'string');
    });
});

describe("test cases for ​searching doctor by doctor id ",function(){
    let obj=new utility.ImplementationClass();
    it("doctor id should not be null",function(){
        let tc1=obj.getDoctorById(null)
        assert.equal(tc1.message.toString(),"doctor id should not be null or undefined");
    });
    
    
    it("doctor id should not be undefined",function(){
        let tc2=obj.getDoctorById(undefined);
        assert.equal(tc2.message.toString(),"doctor id should not be null or undefined");
    });
    
       
    it("doctor id does not exits",function(){
        obj.readDoctorJsonFile();
        let tc3=obj.getDoctorById(22); 
      
        assert.equal(tc3[0],-1);
    });
})

describe("test cases for ​searching doctor by doctor name ",function(){
    let obj=new utility.ImplementationClass();
    it("doctor name should not be null",function(){
        let tc1=obj.getDoctorByName(null)
        assert.equal(tc1.message.toString(),"doctor name should not be null or undefined");
    });
    
    
    it("doctor name should not be undefined",function(){
        let tc2=obj.getDoctorByName(undefined);
        assert.equal(tc2.message.toString(),"doctor name should not be null or undefined");
    });
    it("doctor name should contains letters only",function(){
        let tc2=obj.getDoctorByName("sangita123");
        assert.equal(tc2.message.toString(),"doctor name should contains letters only");
    });
    
       
    it("doctor name does not exits",function(){
        obj.readDoctorJsonFile();
        let tc3=obj.getDoctorByName('abc'); 
        assert.equal(tc3[0],-1);
    });
    // it("successfully find doctor by doctor name",function(){
    //     let obj1=new utility.ImplementationClass();
    //     obj1.readDoctorJsonFile();
    //     let tc4=obj1.getDoctorByName('sangita'); 
    //     assert.isAbove(tc4[0],-1);
    // });
})

describe("test cases for ​searching doctor by doctor specialization ",function(){
    let obj=new utility.ImplementationClass();
    it("doctor specialization should not be null",function(){
        let tc1=obj.getDoctorBySpecializtion(null)
        assert.equal(tc1.message.toString(),"doctor specialization should not be null or undefined");
    });
    
    
    it("doctor specialization should not be undefined",function(){
        let tc2=obj.getDoctorBySpecializtion(undefined);
        assert.equal(tc2.message.toString(),"doctor specialization should not be null or undefined");
    });
    
})

describe("test cases for ​searching doctor by doctor availability ",function(){
    let obj=new utility.ImplementationClass();
    it("doctor availability should not be null",function(){
        let tc1=obj.getDoctorByAvailability(null)
        assert.equal(tc1.message.toString(),"doctor availability should not be null or undefined");
    });
    
    
    it("doctor availability should not be undefined",function(){
        let tc2=obj.getDoctorByAvailability(undefined);
        assert.equal(tc2.message.toString(),"doctor availability should not be null or undefined");
    });

    it("doctor availability should not contains numbers",function(){
        let tc3=obj.getDoctorByAvailability(12)
        assert.equal(tc3.message.toString(),"doctor availability should not contains numbers");
    });
    
})

describe("test cases for displaying doctor information",function(){
    let obj=new utility.ImplementationClass();
    it("index array should not be null",function(){
        let tc1=obj.showDoctorDetails(null);
        assert.equal(tc1.message.toString(),"array index should not be null or undefined");
    });
    
    
    it("index array should not be undefined",function(){
        let tc2=obj.showDoctorDetails(undefined);
        assert.equal(tc2.message.toString(),"array index should not be null or undefined");
    });

    it("array element should not be negative",function(){
        let tc3=obj.showDoctorDetails([-1,1,3]);
        assert.equal(tc3.message.toString(),"array element of array should not be negative");
    });
    
})

describe("test cases for finding patient from patient id",function(){
    let obj=new utility.ImplementationClass();
    it("patient id should not be null",function(){
        let tc1=obj.getPatientById(null);
        assert.equal(tc1.message.toString(),"patient id should not be null or undefined");
    });
    it("patient id should not be undefined",function(){
        let tc2=obj.getPatientById(undefined);
        assert.equal(tc2.message.toString(),"patient id should not be null or undefined");
    });
    it("patient id should not be string",function(){
        let tc3=obj.getPatientById('1');
        assert.equal(tc3.message.toString(),"patient id should not be string");
    });
    
})

describe("test cases for finding patient from patient name",function(){
    let obj=new utility.ImplementationClass();
    it("patient name should not be null",function(){
        let tc1=obj.getPatientByName(null);
        assert.equal(tc1.message.toString(),"patient name should not be null or undefined");
    });
    it("patient name should not be undefined",function(){
        let tc2=obj.getPatientByName(undefined);
        assert.equal(tc2.message.toString(),"patient name should not be null or undefined");
    });
    it("patient name should not digit and atleast 2 character long",function(){
        let tc3=obj.getPatientByName('sangita123');
        assert.equal(tc3.message.toString(),"patient name should not digit and atleast 2 character long");
    });
})
describe("test cases for finding patient from patient mobile number",function(){
    let obj=new utility.ImplementationClass();
    it("patient mobile number should not be null",function(){
        let tc1=obj.getPatientByMobileNumber(null);
        assert.equal(tc1.message.toString(),"patient mobile number should not be null or undefined");
    });
    it("patient mobile number should not be undefined",function(){
        let tc2=obj.getPatientByMobileNumber(undefined);
        assert.equal(tc2.message.toString(),"patient mobile number should not be null or undefined");
    });
    it("patient mobile number should start with 7,8 or 9 and must be 10 digit long",function(){
        let tc3=obj.getPatientByMobileNumber(1234567890)
        assert.equal(tc3.message.toString(),"patient mobile number should start with 7,8 or 9 and must be 10 digit long");
    });
        
})

describe("test cases for displaying patient information",function(){
    let obj=new utility.ImplementationClass();
    it("index array should not be null",function(){
        let tc1=obj.showPatientDetails(null);
        assert.equal(tc1.message.toString(),"array index should not be null or undefined");
    });
   
    it("index array should not be undefined",function(){
        let tc2=obj.showPatientDetails(undefined);
        assert.equal(tc2.message.toString(),"array index should not be null or undefined");
    });

    it("array element should not be negative",function(){
        let tc3=obj.showPatientDetails([-1,1,3]);
        assert.equal(tc3.message.toString(),"array element of array should not be negative");
    });
})

describe("test cases for scheduling appointment",function(){
    let obj=new utility.ImplementationClass();
    it("index array should not be null",function(){
        let tc1=obj.scheduleAppointment(null,"03-10-2019",1);
        assert.equal(tc1.message.toString(),"array index should not be null or undefined");
    });
   
    it("index array should not be undefined",function(){
        let tc2=obj.scheduleAppointment(undefined,"03-10-2019",1);
        assert.equal(tc2.message.toString(),"array index should not be null or undefined");
    });

    it("array index should be number",function(){
        let tc3=obj.scheduleAppointment("1","03-10-2019",1);
        assert.equal(tc3.message.toString(),"array index should be number");
    });

    it("date should not be null",function(){
        let tc1=obj.scheduleAppointment(1,null,11);;
        assert.equal(tc1.message.toString(),"date should not be null or undefined");
    });
   
    it("date should not be undefined",function(){
        let tc2=obj.scheduleAppointment(1,undefined,1);;
        assert.equal(tc2.message.toString(),"date should not be null or undefined");
    });
    it("patient id should not be null",function(){
        let tc1=obj.scheduleAppointment(1,"03-10-2019",null);
        assert.equal(tc1.message.toString(),"patient id should not be null or undefined");
    });
   
    it("patient id should not be undefined",function(){
        let tc2=obj.scheduleAppointment(1,"03-10-2019",undefined);
        assert.equal(tc2.message.toString(),"patient id should not be null or undefined");
    });
    it("patient id should be number",function(){
        let tc2=obj.scheduleAppointment(1,"03-10-2019","1");
        assert.equal(tc2.message.toString(),"patient id should be number");
    });
})

describe("test cases for saving data in appointment json file",function(){
    let obj=new utility.ImplementationClass();
    it("array should not be null",function(){
        let tc1=obj.saveToAppointmentJsonFile(null);
        assert.equal(tc1.message.toString(),"array should not be null or undefined");
    });
    it("array should not be undefined ",function(){
        let tc1=obj.saveToAppointmentJsonFile(undefined);
        assert.equal(tc1.message.toString(),"array should not be null or undefined");
    });
})

describe("test cases for adding patient in patient list",function(){
    let obj=new utility.ImplementationClass();
    it("patient name should not be null",function(){
        let tc1=obj.addPatient(null,23,9422329006)
        
        assert.equal(tc1.message.toString(),"name should not be null or undefined");
    });
    it("patient name should not be undefined",function(){
        let tc1=obj.addPatient(undefined,23,9422329006)
        assert.equal(tc1.message.toString(),"name should not be null or undefined");
    });
    it("patient name should contain atleast two characters and it should be letters only",function(){
        let tc1=obj.addPatient("sangeta123 awaghad",23,9422329006)
        assert.equal(tc1.message.toString(),"name should contain atleast two characters and it should be letters only");
    });
    it("patient age not be null",function(){
        let tc1=obj.addPatient("sangita awaghad",null,9422329006)
        assert.equal(tc1.message.toString(),"age not be null or undefined");
    });
    it("patient age not be undefined",function(){
        let tc1=obj.addPatient("sangita awaghad",undefined,9422329006)
        assert.equal(tc1.message.toString(),"age not be null or undefined");
    });
    it("patient age should be number",function(){
        let tc1=obj.addPatient("sangita awaghad","23",9422329006)
        assert.equal(tc1.message.toString(),"age should be number");
    });
    it("patient mobile number not be null",function(){
        let tc1=obj.addPatient("sangita awaghad",23,null)
        assert.equal(tc1.message.toString(),"phone number not be null or undefined");
    });
    it("patient mobile number not be undefined",function(){
        let tc1=obj.addPatient("sangita awaghad",23,undefined)
        assert.equal(tc1.message.toString(),"phone number not be null or undefined");
    });
    it("patient mobile number should start with 7,8 or 9 and must be 10 digit long",function(){
        let tc1=obj.addPatient("sangita awaghad",23,4422329006)
        assert.equal(tc1.message.toString(),"patient mobile number should start with 7,8 or 9 and must be 10 digit long");
    });
})
