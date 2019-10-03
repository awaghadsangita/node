const assert=require('chai').assert;
const cliniqueUtility=require('../ObjectOriented/CliniqueManagement/CliniqueMgntOpertion');

describe('test cases getting array index from doctor id',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.getDoctorArrayId(null);
    it('doctor id should not be null',function(){
        assert.equal(tc1.message.toString(),'doctor id should not be null');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.getDoctorArrayId(undefined);
    it('doctor id should not be undefined',function(){
        assert.equal(tc2.message.toString(),'doctor id should not be undefined');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.getDoctorArrayId('1');
    it('doctor id should be number',function(){
        assert.equal(tc3.message.toString(),'doctor id should be number');
    })
});

describe('test cases displaying doctor details',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.showDoctorDetails('1');
    it('arguments to show doctor details method should be number',function(){
        assert.equal(tc1.message.toString(),'argument to show doctor details method should be number');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.showDoctorDetails(null);
    it('arguments to show doctor details method should not be null',function(){
        assert.equal(tc2.message.toString(),'argument to show doctor details method should not be null');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.showDoctorDetails(undefined);
    it('argument to show doctor details method should not be undefined',function(){
        assert.equal(tc3.message.toString(),'argument to show doctor details method should not be undefined');
    });
    let cliniqueObj4=new cliniqueUtility.CliniqueOperation();
    let tc4=cliniqueObj4.showDoctorDetails([1,2,'3',4]);
    it('argument to show doctor details method is array then array element should be number',function(){
        assert.equal(tc4.message.toString(),'argument to show doctor details method is array then array element should be number');
    })

    let cliniqueObj5=new cliniqueUtility.CliniqueOperation();
    let tc5=cliniqueObj5.showDoctorDetails([1,2,null,4]);
    it('argument to show doctor details method is array then array element should not be null',function(){
        assert.equal(tc5.message.toString(),'argument to show doctor details method is array then array element should not be null');
    })
    
    let cliniqueObj6=new cliniqueUtility.CliniqueOperation();
    let tc6=cliniqueObj6.showDoctorDetails([1,2,undefined,4]);
    it('argument to show doctor details method is array then array element should not be undefined',function(){
        assert.equal(tc6.message.toString(),'argument to show doctor details method is array then array element should not be undefined');
    });
});

describe('test cases getting array index from doctor name',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.getDoctorByName(undefined);
    it('doctor name should not be undefined',function(){
        assert.equal(tc1.message.toString(),'doctor name should not be undefined');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.getDoctorByName(null);
    it('doctor name should not be null',function(){
        assert.equal(tc2.message.toString(),'doctor name should not be null');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.getDoctorByName(1005);;
    it('doctor name should be string',function(){
        assert.equal(tc3.message.toString(),'doctor name should be string');
    })
});

describe('test cases getting array index from doctor specialization',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.getDoctorBySpecialization(undefined);
    it('specialization should not be undefined',function(){
        assert.equal(tc1.message.toString(),'specialization should not be undefined');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.getDoctorBySpecialization(null);
    it('specialization should not be null',function(){
        assert.equal(tc2.message.toString(),'specialization should not be null');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.getDoctorBySpecialization(1005);;
    it('specialization should not be contain special symbol',function(){
        assert.equal(tc3.message.toString(),'specialization should not be contain special symbol');
    })
});

describe('test cases for finding appoinetment date',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.findAppointmentDate(undefined);
    it('array should not be undefined',function(){
        assert.equal(tc1.message.toString(),'array should not be undefined');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.findAppointmentDate(null);
    it('array should not be null',function(){
        assert.equal(tc2.message.toString(),'array should not be null');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.findAppointmentDate('1');;
    it('array index should be number',function(){
        assert.equal(tc3.message.toString(),'array index should be number');
    })
});

describe('test cases for adding new appoinetment to file',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.addAppointment(undefined,1,"05-09-2019");
    it('patient id should not be undfined',function(){
        assert.equal(tc1.message.toString(),'patient id should not be undfined');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.addAppointment(null,1,"05-09-2019");
    it('patient id should not be null',function(){
        assert.equal(tc2.message.toString(),'patient id should not be null');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.addAppointment('1',1,"05-09-2019");;
    it('patient id should be number',function(){
        assert.equal(tc3.message.toString(),'patient id should be number');
    })

    let cliniqueObj4=new cliniqueUtility.CliniqueOperation();
    let tc4=cliniqueObj4.addAppointment(1,undefined,"05-09-2019");
    it('doctor array index should not be undfined',function(){
        assert.equal(tc4.message.toString(),'doctor array index should not be undfined');
    })

    let cliniqueObj5=new cliniqueUtility.CliniqueOperation();
    let tc5=cliniqueObj5.addAppointment(1,null,"05-09-2019");
    it('doctor array index should not be null',function(){
        assert.equal(tc5.message.toString(),'doctor array index should not be null');
    })
    
    let cliniqueObj6=new cliniqueUtility.CliniqueOperation();
    let tc6=cliniqueObj6.addAppointment(1,'1',"05-09-2019");;
    it('doctor array index should be number',function(){
        assert.equal(tc6.message.toString(),'doctor array index should be number');
    })
    // let cliniqueObj7=new cliniqueUtility.CliniqueOperation();
    // let tc7=cliniqueObj7.addAppointment(1,1,"04-09-2019");;
    // it('appointment date should be greater than or equal to today date',function(){
    //     assert.equal(tc7.message.toString(),'appointment date should be greater than or equal to today date');
    // })
});

describe('test cases for finding doctor by availability.',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.getDoctorByAvailability(undefined);
    it('availability should not be undefined',function(){
        assert.equal(tc1.message.toString(),'invalid availability');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.getDoctorByAvailability(null);
    it('availability should not be null',function(){
        assert.equal(tc2.message.toString(),'invalid availability');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.getDoctorByAvailability(true);;
    it('availability should not be number or boolean value',function(){
        assert.equal(tc3.message.toString(),'invalid availability');
    })
});

describe('test cases for adding new patient',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.addNewPatient(undefined,9422329005,32);
    it('name should not be undefined',function(){
        assert.equal(tc1.message.toString(),'name should not be undefined');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.addNewPatient(null,9422329005,32);
    it('name should not be null',function(){
        assert.equal(tc2.message.toString(),'name should not be null');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.addNewPatient('sangita',9422329006,32);
    it('name must contain first name and last name and letters only',function(){
        assert.equal(tc3.message.toString(),'name must contain first name and last name and letters only');
    })

    let cliniqueObj4=new cliniqueUtility.CliniqueOperation();
    let tc4=cliniqueObj4.addNewPatient("sangita awaghad",undefined,32);
    it('mobile number should not be undefined',function(){
        assert.equal(tc4.message.toString(),'mobile number should not be undefined');
    })

    let cliniqueObj5=new cliniqueUtility.CliniqueOperation();
    let tc5=cliniqueObj5.addNewPatient("sangita awaghad",null,32);
    it('mobile number should not be null',function(){
        assert.equal(tc5.message.toString(),'mobile number should not be null');
    })
    
    let cliniqueObj6=new cliniqueUtility.CliniqueOperation();
    let tc6=cliniqueObj6.addNewPatient("sangita awaghad",21909000000,32);;
    it('mobile number should start with 7 or 8 or 9 must be 10 digit long',function(){
        assert.equal(tc6.message.toString(),'mobile number should start with 7 or 8 or 9 must be 10 digit long');
    })
    let cliniqueObj7=new cliniqueUtility.CliniqueOperation();
    let tc7=cliniqueObj7.addNewPatient("sangita awaghad",9422329006,0);;
    it('age must be greater than zero',function(){
        assert.equal(tc7.message.toString(),'age must be greater than zero');
    })
});

describe('test cases getting array index of from patient id',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.getPatientById(undefined);
    it('patient id should not be undefined',function(){
        assert.equal(tc1.message.toString(),'patient id should not be undefined');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.getPatientById(null);
    it('patient id should not be null',function(){
        assert.equal(tc2.message.toString(),'patient id should not be null');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.getPatientById('1');
    it('patient id should be number',function(){
        assert.equal(tc3.message.toString(),'patient id should be number');
    })
});

describe('test cases for displaying patient details',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.showPatientDetails(undefined);
    it('array index should not be undefined',function(){
        assert.equal(tc1.message.toString(),'array index should not be undefined');
    });

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.showPatientDetails(null);
    it('array index should not be null',function(){
        assert.equal(tc2.message.toString(),'array index should not be null');
    });
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.showPatientDetails('sangita');
    it('array index should be number',function(){
        assert.equal(tc3.message.toString(),'array index should be number');
    });

    let cliniqueObj4=new cliniqueUtility.CliniqueOperation();
    let tc4=cliniqueObj4.showPatientDetails([1,undefined,32]);
    it('array element should not be undefined',function(){
        assert.equal(tc4.message.toString(),'array element should not be undefined');
    });

    let cliniqueObj5=new cliniqueUtility.CliniqueOperation();
    let tc5=cliniqueObj5.showPatientDetails([1,'1',32]);
    it('array element should be number',function(){
        assert.equal(tc5.message.toString(),'array element should be number');
    });
    
    let cliniqueObj6=new cliniqueUtility.CliniqueOperation();
    let tc6=cliniqueObj6.showPatientDetails([1,null,32]);;
    it('array element should not be null',function(){
        assert.equal(tc6.message.toString(),'array element should not be null');
    });
    
});

describe('test cases getting array index from patient name',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.getPatientByName(null);
    it('name must contain first name and last name and letters only',function(){
        assert.equal(tc1.message.toString(),'name must contain first name and last name and letters only');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.getPatientByName(undefined);
    it('name must contain first name and last name and letters only',function(){
        assert.equal(tc2.message.toString(),'name must contain first name and last name and letters only');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.getPatientByName('sangita');
    it('name must contain first name and last name and letters only',function(){
        assert.equal(tc3.message.toString(),'name must contain first name and last name and letters only');
    })
});

describe('test cases getting array index from patient mobile number',function(){
    let cliniqueObj1=new cliniqueUtility.CliniqueOperation();
    let tc1=cliniqueObj1.getPatientByMobileNumber(null);
    it('mobile number should not be null',function(){
        assert.equal(tc1.message.toString(),'invalid mobile number');
    })

    let cliniqueObj2=new cliniqueUtility.CliniqueOperation();
    let tc2=cliniqueObj2.getPatientByMobileNumber(undefined);
    it('mobile number should not be undfined',function(){
        assert.equal(tc2.message.toString(),'invalid mobile number');
    })
    
    let cliniqueObj3=new cliniqueUtility.CliniqueOperation();
    let tc3=cliniqueObj3.getPatientByMobileNumber(111111111111111);
    it('mobile number should start with 7 or 8 or 9 and should be 10 digit long',function(){
        assert.equal(tc3.message.toString(),'invalid mobile number');
    })
});