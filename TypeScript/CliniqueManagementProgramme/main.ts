/*********************************************************************************************************
 * @purpose	:contain main method for cliniq management
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 * 
 **********************************************************************************************************/
import { ImplementationClass } from './implementationClass';
import * as utility from '../Utility/utility';
class Mainclass {
    /**runner method */
    mainMethod() {
        let obj = new ImplementationClass();
        /**read doctor patient and appointment json file and store data in respective array */
        obj.readDoctorJsonFile();
        obj.readPatientJsonFile();
        obj.readAppoinentmentJsonfile();
        let choice;
        do {
            /**shows various option to user */
            console.log('1.SEARCH DOCTOR');
            console.log('2.SEARCH PATIENT');
            console.log('3.TAKE APPOINTMENT');
            console.log('4.FIND POPULAR DOCTOR');
            console.log('Enter your choice');
            choice = utility.getNumber();//take user choice
            switch (choice) {
                case 1: {
                    /**shows vaious option to search doctor */
                    console.log('1.Search Doctor by id');
                    console.log('2.search Doctor by Name ');
                    console.log('3.search Doctor by Specialization');
                    console.log('4.search Doctor by Availability');
                    console.log('Enter your choice');//take user choice
                    let searchchoice = utility.getNumber();
                    switch (searchchoice) {
                        case 1: {
                            console.log('Enter doctor Id');
                            let doctorid = utility.getNumber();
                            let arrayindex = obj.getDoctorById(doctorid);//get doctor id from user
                            if (arrayindex[0] != -1) {//if doctor found shows information
                                obj.showDoctorDetails(arrayindex);
                            }
                            let appointmentDate = obj.findAppointmentDate(arrayindex);//get date when doctor available
                            console.log('doctor is available on ', appointmentDate);
                            console.log('are you want appointment (y/n) ');//asked user whether user want appointment
                            let reply = utility.getString();
                            if (reply.toUpperCase() == 'Y') {

                            } else {
                                console.log('Thank you');
                            }
                        } break;
                        case 2: {
                            console.log('Enter doctor name');
                            let doctorname: string = utility.getString();//get doctor name from user
                            let arrayindex = obj.getDoctorByName(doctorname);//find array index if doctor is found
                            if (arrayindex[0] != -1) {
                                obj.showDoctorDetails(arrayindex);//show doctor details
                            }
                            let appointmentDate = obj.findAppointmentDate(arrayindex);//find when doctor is available
                            console.log('doctor is available on ', appointmentDate);
                            console.log('are you want appointment (y/n) ');
                            let reply = utility.getString();
                            if (reply.toUpperCase() == 'Y') {

                            } else {
                                console.log('Thank you');
                            }

                        } break;
                        case 3: {
                            console.log('Enter doctor Specialization');
                            let specialization: string = utility.getString();//get specialzation from user
                            let arrayindex = obj.getDoctorBySpecializtion(specialization);//find array index if doctor is found
                            if (arrayindex[0] != -1) {
                                obj.showDoctorDetails(arrayindex);//shows doctor information
                            }
                            console.log('are you want appointment (y/n) ');
                            let reply = utility.getString();
                            if (reply.toUpperCase() == 'Y') {
                                console.log('Enter doctor Id');//id from user
                                let doctorid = utility.getNumber();
                                let arrayindex = obj.getDoctorById(doctorid);//find array index
                                let appointmentDate = obj.findAppointmentDate(arrayindex);//find when doctor is avialable
                                console.log('doctor is available on ', appointmentDate);
                            } else {
                                console.log('Thank you');
                            }
                        } break;
                        case 4: {
                            console.log('1.AM\n2.PM\n3.BOTH\nEnter your choice');//show option to user
                            let availability: number = utility.getNumber();

                            let avial: string;
                            switch (availability) {
                                case 1: { avial = "AM"; break; }
                                case 2: { avial = "PM"; break; }
                                case 3: { avial = "BOTH"; break; }
                                default: console.log('Invalid Shift')
                            }
                            let arrayindex = obj.getDoctorByAvailability(avial);//find all doctors working in given shift
                            if (arrayindex[0] != -1) {
                                obj.showDoctorDetails(arrayindex);
                            }
                            console.log('are you want appointment (y/n) ');
                            let reply = utility.getString();
                            if (reply.toUpperCase() == 'Y') {
                                console.log('Enter doctor Id');//get doctor id
                                let doctorid = utility.getNumber();
                                let arrayindex = obj.getDoctorById(doctorid);//find array index
                                let appointmentDate = obj.findAppointmentDate(arrayindex);//find availability
                                console.log('doctor is available on ', appointmentDate);
                            } else {
                                console.log('Thank you');
                            }
                        } break;
                        default: {
                            console.log('Invalid doctor search chioce');
                        }

                    }
                } break;
                case 2: {
                    /**shows various options to find patient */
                    console.log('1.Search Patient by Id');
                    console.log('2.Search Patient by Name');
                    console.log('3.Search Patient by Mobile number');
                    console.log('Enter your choice :');
                    let innerchoice = utility.getNumber();//get user choice
                    switch (innerchoice) {
                        case 1: {
                            console.log('Enter the Patient id');
                            let id = utility.getNumber();//get patient id
                            let index = obj.getPatientById(id);//find array index
                            if (index[0] != -1) {
                                obj.showPatientDetails(index);//shows patient information if patient found in array list
                            }
                        } break;
                        case 2: {
                            console.log('Enter the Patient Name :');
                            let name = utility.getString();//get patient name from user
                            let index = obj.getPatientByName(name);//find array index
                            if (index[0] != -1) {
                                obj.showPatientDetails(index);//shows patient information if patient found in array list
                            }
                        } break;
                        case 3: {
                            console.log('Enter the Patient Mobile Number :');
                            let ph = utility.getNumber();//get patient mobile number from user
                            let index = obj.getPatientByMobileNumber(ph);//find array index from mobile number
                            if (index[0] != -1) {
                                obj.showPatientDetails(index);//shows patient information if patient found in array list
                            }
                        } break;
                        default: console.log('Invalid inner choice');
                    }
                } break;
                case 3: {
                    console.log('Enter doctor name');//get doctor name from user
                    let doctorname: string = utility.getString();
                    let arrayindex = obj.getDoctorByName(doctorname);//find array index from doctorname
                    if (arrayindex[0] != -1) {
                        obj.showDoctorDetails(arrayindex);//show doctor details
                    }
                    let appointmentDate = obj.findAppointmentDate(arrayindex);//find when doctor is available
                    console.log('doctor is available on ', appointmentDate);
                    console.log('are you sure to schedule appointment(y/n) :');
                    let appointmentReply=utility.getString();
                    if(appointmentReply.toLowerCase()=='y')
                    {
                        console.log('Are You new Patient(y/n) ');//asked patient if he/she is new patinet
                        let reply = utility.getString();
                        if (reply.toLocaleLowerCase() == 'y') {//if new patient asked allinformation 
                            console.log('Enter the Patient Name :');
                            let name=utility.getString();
                            console.log('Enter the Age ');
                            let age=utility.getNumber();
                            console.log('Enter the Mobile Number :');
                            let ph=utility.getNumber();
                            obj.addPatient(name,age,ph);//add it to patient array
                        } else {
                        console.log('Enter patient Id')
                        let pid = utility.getNumber();//if not new patient then asked id
                        obj.scheduleAppointment(arrayindex[0],appointmentDate,pid);//scheduleAppointment
                    }
                }
                } break;
                case 4:{
                    obj.findPopularDoctor();//find popular doctor
                    break;
                }
                default: console.log('Invalid choice');
            }
            

        } while (choice != 5)

    }
}
export { Mainclass }
let o = new Mainclass();
o.mainMethod();