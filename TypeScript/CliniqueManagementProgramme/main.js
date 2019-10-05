"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*********************************************************************************************************
 * @purpose	:contain main method for cliniq management
 *
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 *
 **********************************************************************************************************/
var implementationClass_1 = require("./implementationClass");
var utility = require("../Utility/utility");
var Mainclass = /** @class */ (function () {
    function Mainclass() {
    }
    /**runner method */
    Mainclass.prototype.mainMethod = function () {
        var obj = new implementationClass_1.ImplementationClass();
        /**read doctor patient and appointment json file and store data in respective array */
        obj.readDoctorJsonFile();
        obj.readPatientJsonFile();
        obj.readAppoinentmentJsonfile();
        var choice;
        do {
            /**shows various option to user */
            console.log('1.SEARCH DOCTOR');
            console.log('2.SEARCH PATIENT');
            console.log('3.TAKE APPOINTMENT');
            console.log('4.FIND POPULAR DOCTOR');
            console.log('Enter your choice');
            choice = utility.getNumber(); //take user choice
            switch (choice) {
                case 1:
                    {
                        /**shows vaious option to search doctor */
                        console.log('1.Search Doctor by id');
                        console.log('2.search Doctor by Name ');
                        console.log('3.search Doctor by Specialization');
                        console.log('4.search Doctor by Availability');
                        console.log('Enter your choice'); //take user choice
                        var searchchoice = utility.getNumber();
                        switch (searchchoice) {
                            case 1:
                                {
                                    console.log('Enter doctor Id');
                                    var doctorid = utility.getNumber();
                                    var arrayindex = obj.getDoctorById(doctorid); //get doctor id from user
                                    if (arrayindex instanceof Error) {
                                        throw arrayindex.message;
                                    }
                                    if (arrayindex[0] != -1) { //if doctor found shows information
                                        var tc = obj.showDoctorDetails(arrayindex);
                                        if (tc instanceof Error) {
                                            throw tc.message;
                                        }
                                    }
                                    var appointmentDate = obj.findAppointmentDate(arrayindex); //get date when doctor available
                                    if (appointmentDate instanceof Error) {
                                        throw appointmentDate.message;
                                    }
                                    console.log('doctor is available on ', appointmentDate);
                                    // console.log('are you want appointment (y/n) ');//asked user whether user want appointment
                                    // let reply = utility.getString();
                                    // if (reply.toUpperCase() == 'N') {
                                    //     console.log('Thank you');
                                    // } 
                                    // else {
                                    // }
                                }
                                break;
                            case 2:
                                {
                                    console.log('Enter doctor name');
                                    var doctorname = utility.getString(); //get doctor name from user
                                    var arrayindex = obj.getDoctorByName(doctorname); //find array index if doctor is found
                                    if (arrayindex instanceof Error) {
                                        throw arrayindex.message;
                                    }
                                    if (arrayindex[0] != -1) {
                                        var tc = obj.showDoctorDetails(arrayindex); //show doctor details
                                        if (tc instanceof Error) {
                                            throw tc.message;
                                        }
                                    }
                                    var appointmentDate = obj.findAppointmentDate(arrayindex); //find when doctor is available
                                    if (appointmentDate instanceof Error) {
                                        throw appointmentDate.message;
                                    }
                                    console.log('doctor is available on ', appointmentDate);
                                    // console.log('are you want appointment (y/n) ');
                                    // let reply = utility.getString();
                                    // if (reply.toUpperCase() == 'Y') {
                                    // } else {
                                    //     console.log('Thank you');
                                    // }
                                }
                                break;
                            case 3:
                                {
                                    console.log('Enter doctor Specialization');
                                    var specialization = utility.getString(); //get specialzation from user
                                    var arrayindex = obj.getDoctorBySpecializtion(specialization); //find array index if doctor is found
                                    if (arrayindex instanceof Error) {
                                        throw arrayindex.message;
                                    }
                                    if (arrayindex[0] != -1) {
                                        var tc = obj.showDoctorDetails(arrayindex); //shows doctor information
                                        if (tc instanceof Error) {
                                            throw tc.message;
                                        }
                                    }
                                    console.log('are you want appointment (y/n) ');
                                    var reply = utility.getString();
                                    if (reply.toUpperCase() == 'Y') {
                                        console.log('Enter doctor Id'); //id from user
                                        var doctorid = utility.getNumber();
                                        var arrayindex_1 = obj.getDoctorById(doctorid); //find array index
                                        if (arrayindex_1 instanceof Error) {
                                            throw arrayindex_1.message;
                                        }
                                        var appointmentDate = obj.findAppointmentDate(arrayindex_1); //find when doctor is avialable
                                        if (appointmentDate instanceof Error) {
                                            throw appointmentDate.message;
                                        }
                                        console.log('doctor is available on ', appointmentDate);
                                    }
                                    else {
                                        console.log('Thank you');
                                    }
                                }
                                break;
                            case 4:
                                {
                                    console.log('1.AM\n2.PM\n3.BOTH\nEnter your choice'); //show option to user
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
                                    var arrayindex = obj.getDoctorByAvailability(avial); //find all doctors working in given shift
                                    if (arrayindex instanceof Error) {
                                        throw arrayindex.message;
                                    }
                                    if (arrayindex[0] != -1) {
                                        var tc = obj.showDoctorDetails(arrayindex);
                                        if (tc instanceof Error) {
                                            throw tc.message;
                                        }
                                    }
                                    console.log('are you want appointment (y/n) ');
                                    var reply = utility.getString();
                                    if (reply.toUpperCase() == 'Y') {
                                        console.log('Enter doctor Id'); //get doctor id
                                        var doctorid = utility.getNumber();
                                        var arrayindex_2 = obj.getDoctorById(doctorid); //find array index
                                        if (arrayindex_2 instanceof Error) {
                                            throw arrayindex_2.message;
                                        }
                                        var appointmentDate = obj.findAppointmentDate(arrayindex_2); //find availability
                                        if (appointmentDate instanceof Error) {
                                            throw appointmentDate.message;
                                        }
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
                        /**shows various options to find patient */
                        console.log('1.Search Patient by Id');
                        console.log('2.Search Patient by Name');
                        console.log('3.Search Patient by Mobile number');
                        console.log('Enter your choice :');
                        var innerchoice = utility.getNumber(); //get user choice
                        switch (innerchoice) {
                            case 1:
                                {
                                    console.log('Enter the Patient id');
                                    var id = utility.getNumber(); //get patient id
                                    var index = obj.getPatientById(id); //find array index
                                    if (index instanceof Error) {
                                        throw index.message;
                                    }
                                    if (index[0] != -1) {
                                        var tc = obj.showPatientDetails(index); //shows patient information if patient found in array list
                                        if (tc instanceof Error) {
                                            throw tc.message;
                                        }
                                    }
                                }
                                break;
                            case 2:
                                {
                                    console.log('Enter the Patient Name :');
                                    var name_1 = utility.getString(); //get patient name from user
                                    var index = obj.getPatientByName(name_1); //find array index
                                    if (index instanceof Error) {
                                        throw index.message;
                                    }
                                    if (index[0] != -1) {
                                        var tc = obj.showPatientDetails(index); //shows patient information if patient found in array list
                                        if (tc instanceof Error) {
                                            throw tc.message;
                                        }
                                    }
                                }
                                break;
                            case 3:
                                {
                                    console.log('Enter the Patient Mobile Number :');
                                    var ph = utility.getNumber(); //get patient mobile number from user
                                    var index = obj.getPatientByMobileNumber(ph); //find array index from mobile number
                                    if (index instanceof Error) {
                                        throw index.message;
                                    }
                                    if (index[0] != -1) {
                                        var tc = obj.showPatientDetails(index); //shows patient information if patient found in array list
                                        if (tc instanceof Error) {
                                            throw tc.message;
                                        }
                                    }
                                }
                                break;
                            default: console.log('Invalid inner choice');
                        }
                    }
                    break;
                case 3:
                    {
                        console.log('Enter doctor name'); //get doctor name from user
                        var doctorname = utility.getString();
                        var arrayindex = obj.getDoctorByName(doctorname); //find array index from doctorname
                        if (arrayindex instanceof Error) {
                            throw arrayindex.message;
                        }
                        if (arrayindex[0] != -1) {
                            var tc = obj.showDoctorDetails(arrayindex); //show doctor details
                            if (tc instanceof Error) {
                                throw tc.message;
                            }
                        }
                        var appointmentDate = obj.findAppointmentDate(arrayindex); //find when doctor is available
                        if (appointmentDate instanceof Error) {
                            throw appointmentDate.message;
                        }
                        console.log('doctor is available on ', appointmentDate);
                        console.log('are you sure to schedule appointment(y/n) :');
                        var appointmentReply = utility.getString();
                        if (appointmentReply.toLowerCase() == 'y') {
                            console.log('Are You new Patient(y/n) '); //asked patient if he/she is new patinet
                            var reply = utility.getString();
                            if (reply.toLocaleLowerCase() == 'y') { //if new patient asked allinformation 
                                console.log('Enter the Patient Name :');
                                var name_2 = utility.getString();
                                console.log('Enter the Age ');
                                var age = utility.getNumber();
                                console.log('Enter the Mobile Number :');
                                var ph = utility.getNumber();
                                var tc = obj.addPatient(name_2, age, ph); //add it to patient array
                                if (tc instanceof Error) {
                                    throw tc.message;
                                }
                            }
                            else {
                                console.log('Enter patient Id');
                                var pid = utility.getNumber(); //if not new patient then asked id
                                var tc0 = obj.scheduleAppointment(arrayindex[0], appointmentDate, pid); //scheduleAppointment
                                if (tc0 instanceof Error) {
                                    throw tc0.message;
                                }
                                console.log('You appointment is schedule on ', appointmentDate);
                            }
                        }
                    }
                    break;
                case 4: {
                    var tc = obj.findPopularDoctor(); //find popular doctor
                    if (tc instanceof Error) {
                        throw tc.message;
                    }
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
