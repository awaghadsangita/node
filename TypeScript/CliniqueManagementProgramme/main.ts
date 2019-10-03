import { ImplementationClass } from './implementationClass';
import * as utility from '../Utility/utility';
class Mainclass {
    mainMethod() {
        let obj = new ImplementationClass();
        obj.readDoctorJsonFile();
        obj.readPatientJsonFile();
        obj.readAppoinentmentJsonfile();
        let choice;
        do {
            console.log('1.SEARCH DOCTOR');
            console.log('2.SEARCH PATIENT');
            console.log('3.TAKE APPOINTMENT');
            console.log('4.FIND POPULAR DOCTOR');
            console.log('Enter your choice');
            choice = utility.getNumber();
            switch (choice) {
                case 1: {
                    console.log('1.Search Doctor by id');
                    console.log('2.search Doctor by Name ');
                    console.log('3.search Doctor by Specialization');
                    console.log('4.search Doctor by Availability');
                    console.log('Enter your choice');
                    let searchchoice = utility.getNumber();
                    switch (searchchoice) {
                        case 1: {
                            console.log('Enter doctor Id');
                            let doctorid = utility.getNumber();
                            let arrayindex = obj.getDoctorById(doctorid);
                            if (arrayindex[0] != -1) {
                                obj.showDoctorDetails(arrayindex);
                            }
                            let appointmentDate = obj.findAppointmentDate(arrayindex);
                            console.log('doctor is available on ', appointmentDate);
                            console.log('are you want appointment (y/n) ');
                            let reply = utility.getString();
                            if (reply.toUpperCase() == 'Y') {

                            } else {
                                console.log('Thank you');
                            }
                        } break;
                        case 2: {
                            console.log('Enter doctor name');
                            let doctorname: string = utility.getString();
                            let arrayindex = obj.getDoctorByName(doctorname);
                            if (arrayindex[0] != -1) {
                                obj.showDoctorDetails(arrayindex);
                            }
                            let appointmentDate = obj.findAppointmentDate(arrayindex);
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
                            let specialization: string = utility.getString();
                            let arrayindex = obj.getDoctorBySpecializtion(specialization);
                            if (arrayindex[0] != -1) {
                                obj.showDoctorDetails(arrayindex);
                            }
                            console.log('are you want appointment (y/n) ');
                            let reply = utility.getString();
                            if (reply.toUpperCase() == 'Y') {
                                console.log('Enter doctor Id');
                                let doctorid = utility.getNumber();
                                let arrayindex = obj.getDoctorById(doctorid);
                                let appointmentDate = obj.findAppointmentDate(arrayindex);
                                console.log('doctor is available on ', appointmentDate);
                            } else {
                                console.log('Thank you');
                            }
                        } break;
                        case 4: {
                            console.log('1.AM\n2.PM\n3.BOTH\nEnter your choice');
                            let availability: number = utility.getNumber();

                            let avial: string;
                            switch (availability) {
                                case 1: { avial = "AM"; break; }
                                case 2: { avial = "PM"; break; }
                                case 3: { avial = "BOTH"; break; }
                                default: console.log('Invalid Shift')
                            }
                            let arrayindex = obj.getDoctorByAvailability(avial);
                            if (arrayindex[0] != -1) {
                                obj.showDoctorDetails(arrayindex);
                            }
                            console.log('are you want appointment (y/n) ');
                            let reply = utility.getString();
                            if (reply.toUpperCase() == 'Y') {
                                console.log('Enter doctor Id');
                                let doctorid = utility.getNumber();
                                let arrayindex = obj.getDoctorById(doctorid);
                                let appointmentDate = obj.findAppointmentDate(arrayindex);
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
                    console.log('1.Search Patient by Id');
                    console.log('2.Search Patient by Name');
                    console.log('3.Search Patient by Mobile number');
                    console.log('Enter your choice :');
                    let innerchoice = utility.getNumber();
                    switch (innerchoice) {
                        case 1: {
                            console.log('Enter the Patient id');
                            let id = utility.getNumber();
                            let index = obj.getPatientById(id);
                            if (index[0] != -1) {
                                obj.showPatientDetails(index);
                            }
                        } break;
                        case 2: {
                            console.log('Enter the Patient Name :');
                            let name = utility.getString();
                            let index = obj.getPatientByName(name);
                            if (index[0] != -1) {
                                obj.showPatientDetails(index);
                            }
                        } break;
                        case 3: {
                            console.log('Enter the Patient Mobile Number :');
                            let ph = utility.getNumber();
                            let index = obj.getPatientByMobileNumber(ph);
                            if (index[0] != -1) {
                                obj.showPatientDetails(index);
                            }
                        } break;
                        default: console.log('Invalid inner choice');
                    }
                } break;
                case 3: {
                    console.log('Enter doctor name');
                    let doctorname: string = utility.getString();
                    let arrayindex = obj.getDoctorByName(doctorname);
                    if (arrayindex[0] != -1) {
                        obj.showDoctorDetails(arrayindex);
                    }
                    let appointmentDate = obj.findAppointmentDate(arrayindex);
                    console.log('doctor is available on ', appointmentDate);
                    console.log('are you sure to schedule appointment(y/n) :');
                    let appointmentReply=utility.getString();
                    if(appointmentReply.toLowerCase()=='y')
                    {
                        console.log('Are You new Patient(y/n) ');
                        let reply = utility.getString();
                        if (reply.toLocaleLowerCase() == 'y') {
                            console.log('Enter the Patient Name :');
                            let name=utility.getString();
                            console.log('Enter the Age ');
                            let age=utility.getNumber();
                            console.log('Enter the Mobile Number :');
                            let ph=utility.getNumber();
                            obj.addPatient(name,age,ph);
                        } else {
                        console.log('Enter patient Id')
                        let pid = utility.getNumber();
                        obj.scheduleAppointment(arrayindex[0],appointmentDate,pid);
                    }
                }
                } break;
                case 4:{
                    obj.findPopularDoctor();
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