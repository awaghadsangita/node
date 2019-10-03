"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var implementationClass_1 = require("./implementationClass");
var utility = require("../Utility/utility");
var Mainclass = /** @class */ (function () {
    function Mainclass() {
    }
    Mainclass.prototype.mainMethod = function () {
        var obj = new implementationClass_1.ImplementationClass();
        obj.readDoctorJsonFile();
        obj.readPatientJsonFile();
        obj.readAppoinentmentJsonfile();
        var choice;
        do {
            console.log('1.SEARCH DOCTOR');
            console.log('2.SEARCH PATIENT');
            console.log('3.TAKE APPOINTMENT');
            console.log('4.FIND POPULAR DOCTOR');
            console.log('Enter your choice');
            choice = utility.getNumber();
            switch (choice) {
                case 1:
                    {
                        console.log('1.Search Doctor by id');
                        console.log('2.search Doctor by Name ');
                        console.log('3.search Doctor by Specialization');
                        console.log('4.search Doctor by Availability');
                        console.log('Enter your choice');
                        var searchchoice = utility.getNumber();
                        switch (searchchoice) {
                            case 1:
                                {
                                    console.log('Enter doctor Id');
                                    var doctorid = utility.getNumber();
                                    var arrayindex = obj.getDoctorById(doctorid);
                                    if (arrayindex[0] != -1) {
                                        obj.showDoctorDetails(arrayindex);
                                    }
                                    var appointmentDate = obj.findAppointmentDate(arrayindex);
                                    console.log('doctor is available on ', appointmentDate);
                                    console.log('are you want appointment (y/n) ');
                                    var reply = utility.getString();
                                    if (reply.toUpperCase() == 'Y') {
                                    }
                                    else {
                                        console.log('Thank you');
                                    }
                                }
                                break;
                            case 2:
                                {
                                    console.log('Enter doctor name');
                                    var doctorname = utility.getString();
                                    var arrayindex = obj.getDoctorByName(doctorname);
                                    if (arrayindex[0] != -1) {
                                        obj.showDoctorDetails(arrayindex);
                                    }
                                    var appointmentDate = obj.findAppointmentDate(arrayindex);
                                    console.log('doctor is available on ', appointmentDate);
                                    console.log('are you want appointment (y/n) ');
                                    var reply = utility.getString();
                                    if (reply.toUpperCase() == 'Y') {
                                    }
                                    else {
                                        console.log('Thank you');
                                    }
                                }
                                break;
                            case 3:
                                {
                                    console.log('Enter doctor Specialization');
                                    var specialization = utility.getString();
                                    var arrayindex = obj.getDoctorBySpecializtion(specialization);
                                    if (arrayindex[0] != -1) {
                                        obj.showDoctorDetails(arrayindex);
                                    }
                                    console.log('are you want appointment (y/n) ');
                                    var reply = utility.getString();
                                    if (reply.toUpperCase() == 'Y') {
                                        console.log('Enter doctor Id');
                                        var doctorid = utility.getNumber();
                                        var arrayindex_1 = obj.getDoctorById(doctorid);
                                        var appointmentDate = obj.findAppointmentDate(arrayindex_1);
                                        console.log('doctor is available on ', appointmentDate);
                                    }
                                    else {
                                        console.log('Thank you');
                                    }
                                }
                                break;
                            case 4:
                                {
                                    console.log('1.AM\n2.PM\n3.BOTH\nEnter your choice');
                                    var availability = utility.getNumber();
                                    var avial = void 0;
                                    switch (availability) {
                                        case 1: {
                                            avial = "AM";
                                            break;
                                        }
                                        case 2: {
                                            avial = "PM";
                                            break;
                                        }
                                        case 3: {
                                            avial = "BOTH";
                                            break;
                                        }
                                        default: console.log('Invalid Shift');
                                    }
                                    var arrayindex = obj.getDoctorByAvailability(avial);
                                    if (arrayindex[0] != -1) {
                                        obj.showDoctorDetails(arrayindex);
                                    }
                                    console.log('are you want appointment (y/n) ');
                                    var reply = utility.getString();
                                    if (reply.toUpperCase() == 'Y') {
                                        console.log('Enter doctor Id');
                                        var doctorid = utility.getNumber();
                                        var arrayindex_2 = obj.getDoctorById(doctorid);
                                        var appointmentDate = obj.findAppointmentDate(arrayindex_2);
                                        console.log('doctor is available on ', appointmentDate);
                                    }
                                    else {
                                        console.log('Thank you');
                                    }
                                }
                                break;
                            default: {
                                console.log('Invalid doctor search chioce');
                            }
                        }
                    }
                    break;
                case 2:
                    {
                        console.log('1.Search Patient by Id');
                        console.log('2.Search Patient by Name');
                        console.log('3.Search Patient by Mobile number');
                        console.log('Enter your choice :');
                        var innerchoice = utility.getNumber();
                        switch (innerchoice) {
                            case 1:
                                {
                                    console.log('Enter the Patient id');
                                    var id = utility.getNumber();
                                    var index = obj.getPatientById(id);
                                    if (index[0] != -1) {
                                        obj.showPatientDetails(index);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    console.log('Enter the Patient Name :');
                                    var name_1 = utility.getString();
                                    var index = obj.getPatientByName(name_1);
                                    if (index[0] != -1) {
                                        obj.showPatientDetails(index);
                                    }
                                }
                                break;
                            case 3:
                                {
                                    console.log('Enter the Patient Mobile Number :');
                                    var ph = utility.getNumber();
                                    var index = obj.getPatientByMobileNumber(ph);
                                    if (index[0] != -1) {
                                        obj.showPatientDetails(index);
                                    }
                                }
                                break;
                            default: console.log('Invalid inner choice');
                        }
                    }
                    break;
                case 3:
                    {
                        console.log('Enter doctor name');
                        var doctorname = utility.getString();
                        var arrayindex = obj.getDoctorByName(doctorname);
                        if (arrayindex[0] != -1) {
                            obj.showDoctorDetails(arrayindex);
                        }
                        var appointmentDate = obj.findAppointmentDate(arrayindex);
                        console.log('doctor is available on ', appointmentDate);
                        console.log('are you sure to schedule appointment(y/n) :');
                        var appointmentReply = utility.getString();
                        if (appointmentReply.toLowerCase() == 'y') {
                            console.log('Are You new Patient(y/n) ');
                            var reply = utility.getString();
                            if (reply.toLocaleLowerCase() == 'y') {
                                console.log('Enter the Patient Name :');
                                var name_2 = utility.getString();
                                console.log('Enter the Age ');
                                var age = utility.getNumber();
                                console.log('Enter the Mobile Number :');
                                var ph = utility.getNumber();
                                obj.addPatient(name_2, age, ph);
                            }
                            else {
                                console.log('Enter patient Id');
                                var pid = utility.getNumber();
                                obj.scheduleAppointment(arrayindex[0], appointmentDate, pid);
                            }
                        }
                    }
                    break;
                case 4: {
                    obj.findPopularDoctor();
                    break;
                }
                default: console.log('Invalid choice');
            }
        } while (choice != 5);
    };
    return Mainclass;
}());
exports.Mainclass = Mainclass;
var o = new Mainclass();
o.mainMethod();
