
/*********************************************************************************************************
 * @purpose	:this class flow of control to clinique management
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
const utility = require('../../Utility/Utility');
const doctorUtility = require('./GetterSetterUtility');
const operationUtility = require('./CliniqueMgntOpertion');
const moment = require('moment')

class MainClass {
    constructor() {
        this.managementObj = new operationUtility.CliniqueOperation();//create object cliniqueOpetaion class
    }
    main() {
        try {
            let opertionChoice;
            let innerOpertionChoice;

            this.managementObj.getDoctorJsonArray();//call this method read doctor json file
            this.managementObj.getPatientJsonArray();//call this method to read patient json file
            this.managementObj.getAppointmentJsonArray();//call this method to read appintment json file

            do {
                console.log('**********************CLINIQUE MANAGEMENT**********************************************************')
                console.log('\t1.search doctor');
                console.log('\t2.search patient');
                console.log('\t3.take appointment');
                console.log('\t4.exit');
                process.stdout.write('which operation do you want to perform :');
                opertionChoice = utility.getInputNumber();//take user choice


                switch (opertionChoice) {
                    case 1:
                        do {//case 1 for searching doctor
                            console.log('-----------------------------------------------------');
                            console.log('\t\tSEARCH DOCTOR');
                            console.log('-----------------------------------------------------');
                            console.log('\t\t1.seatch by id');
                            console.log('\t\t2.seatch by name');
                            console.log('\t\t3.seatch by specialization');
                            console.log('\t\t4.seatch by availability');
                            console.log('\t\t5.exit');
                            process.stdout.write('\thow to you want to search :');
                            innerOpertionChoice = utility.getInputNumber();//take user choice
                            switch (innerOpertionChoice) {
                                case 1: {
                                    process.stdout.write('\tenter the doctor id :');
                                    let doctorid = utility.getInputNumber();
                                    let idArray = this.managementObj.getDoctorArrayId(doctorid);
                                    if (idArray instanceof Error) {//idArray is instance of Error
                                        throw idArray.message.toString();
                                    }
                                    if (idArray == -1) {//if doctor not found in array
                                        throw 'doctor id does not exist';
                                    }
                                    let tc1 = this.managementObj.showDoctorDetails(idArray);//show doctor details
                                    if (tc1 instanceof Error) {//tc1 is instance of error
                                        throw tc1.message.toString();
                                    }
                                    process.stdout.write('\tdo you want appointment(yes/no) :');
                                    let replyOFAppointment = utility.getString();
                                    if (replyOFAppointment == 'yes') {
                                        let appoinetmentDate = this.managementObj.findAppointmentDate(idArray);//gives next appointment date
                                        if(appoinetmentDate instanceof Error)//if appointmentDate instance of error
                                        {
                                            throw appoinetmentDate.message.toString();
                                        }
                                        process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);//take user decision
                                        let replyofSchedule = utility.getString();
                                        if (replyofSchedule == 'yes') {
                                            this.takeAppointment(idArray, appoinetmentDate);
                                        }
                                    }
                                }
                                    break;
                                case 2: {
                                    process.stdout.write('\tenter the doctor name :');
                                    let doctorname = utility.getName();//take doctor name from user
                                    doctorname = 'Dr.' + doctorname;

                                    let idArray;
                                    idArray = this.managementObj.getDoctorByName(doctorname);//gives array index 

                                    if (idArray instanceof Error) {//idArray is instanceof error
                                        throw idArray.message.toString();
                                    }
                                    if (idArray == -1) {//doctor with given name not found
                                        throw 'doctor name does not exist';
                                    }
                                    let tc1 = this.managementObj.showDoctorDetails(idArray);//show details of doctor name
                                    if (tc1 instanceof Error) {//tc1 is instance of Error
                                        throw tc1.message.toString();
                                    }
                                    process.stdout.write('\tdo you want appointment(yes/no) :');//take user decision
                                    let replyOFAppointment = utility.getString();
                                    if (replyOFAppointment == 'yes') {
                                        let appoinetmentDate = this.managementObj.findAppointmentDate(idArray);
                                        if(appoinetmentDate instanceof toString())
                                        {
                                            throw appoinetmentDate.message.toString();
                                        }
                                        process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);//take user confirmation
                                        let replyofSchedule = utility.getString();
                                        if (replyofSchedule == 'yes') {
                                            this.takeAppointment(idArray, appoinetmentDate);//schedule appointment
                                        }
                                    }
                                }
                                    break;
                                case 3:
                                    {
                                        process.stdout.write('\tenter the doctor specialization :');
                                        let specializatione = utility.getNextLine();
                                        let idArray = this.managementObj.getDoctorBySpecialization(specializatione);
                                        if (idArray == -1) {//doctor with specidfic specialzation not found
                                            throw `doctor with ${specializatione} is not found`;
                                        }
                                        if (idArray instanceof Error) {//idArray is instance of error
                                            throw idArray.message.toString();
                                        }
                                        let tc1 = this.managementObj.showDoctorDetails(idArray);//shows details of doctor
                                        if (tc1 instanceof Error) {//tc1 instance of error
                                            throw tc1.message.toString();
                                        }
                                        process.stdout.write('\tdo you want appointment(yes/no) :');
                                        let replyOFAppointment = utility.getString();//take user decision
                                        if (replyOFAppointment == 'yes') {
                                            process.stdout.write(`enter the doctor id :`);
                                            let doctorid = utility.getInputNumber();
                                            let arrayindex = this.managementObj.getDoctorArrayId(doctorid);//get array index based of id
            
                                            if (arrayindex instanceof Error) {//arrayindex instanceof Error
                                                throw arrayindex.message.toString();
                                            }
                                            if (arrayindex == -1) {//if doctor with given id not found
                                                throw 'doctor does not exist';
                                            }
                                            let appoinetmentDate = this.managementObj.findAppointmentDate(arrayindex);//get appoientment date of doctor
                                            if (appoinetmentDate instanceof Error) {
                                                throw appoinetmentDate.message.toString();
                                            }
                                            process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);
                                            let replyofSchedule = utility.getString();
                                            if (replyofSchedule == 'yes') {
                                                this.takeAppointment(arrayindex, appoinetmentDate);
                                            }
                                        }
                                    }
                                    break;
                                case 4:
                                    {
                                        console.log('\t1. AM');
                                        console.log('\t2. PM');
                                        console.log('\t3. BOTH');
                                        process.stdout.write('\t\nin which shift you want doctor available :');
                                        let shift = utility.getInputNumber();
                                        let availability;
                                        if (shift == 1)
                                            availability = 'AM';
                                        else if (shift == 2)
                                            availability = 'PM';
                                        else if (shift == 3)
                                            availability = 'BOTH';
                                        else
                                            throw 'invalid availability';
                                        let idArray = this.managementObj.getDoctorByAvailability(availability);//get array of index
                                        if(idArray instanceof Error)//idArray instanceof error
                                        {
                                            throw idArray.message.toString();
                                        }
                                        let tc1=this.managementObj.showDoctorDetails(idArray);//shows doctor details
                                        if(tc1 instanceof Error)//tc1 instanceof error
                                        {
                                            throw tc1.message.toString();
                                        }
                                        process.stdout.write('\tdo you want appointment(yes/no) :');
                                        let replyOFAppointment = utility.getString();
                                        if (replyOFAppointment == 'yes') {
                                            process.stdout.write(`enter the doctor id :`);//id of doctor from user
                                            let doctorid = utility.getInputNumber();
                                            let arrayindex = this.managementObj.getDoctorArrayId(doctorid);//find array index based on doctorid
                                            if(arrayindex==-1)//doctor with given id is not found
                                            {
                                                throw `doctor with doctor id ${doctorid} does not exist`;
                                            }
                                            if(arrayindex instanceof Error)//arrayindex is instanceof error
                                            {
                                                throw arrayindex.message.toString();
                                            }
                                            let appoinetmentDate = this.managementObj.findAppointmentDate(arrayindex);//find appointment date of doctor
                                            if(appoinetmentDate instanceof Error)//appoinetmentDate is instance of error
                                            {
                                                throw appoinetmentDate.message.toString();
                                            }
                                            process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);
                                            let replyofSchedule = utility.getString();
                                            if (replyofSchedule == 'yes') {
                                                this.takeAppointment(arrayindex, appoinetmentDate);
                                            }
                                        }
                                    }
                                    break;
                            }
                        } while (innerOpertionChoice != 5);
                        break;
                    case 2: {//case to search patient
                        console.log('-----------------------------------------------------');
                        console.log('\t\tSEARCH PATIENT');
                        console.log('-----------------------------------------------------');
                        console.log('\t\t1.seatch by id');
                        console.log('\t\t2.seatch by name');
                        console.log('\t\t3.seatch by mobile number');
                        console.log('\t\t4.exit');
                        process.stdout.write('\thow to you want to search  patient :');
                        innerOpertionChoice = utility.getInputNumber();//take user choice
                        switch (innerOpertionChoice) {
                            case 1: {
                                process.stdout.write('\tenter patient id :');
                                let pid = utility.getInputNumber();//take patient id from user
                                let indexedArray = this.managementObj.getPatientById(pid);//find array index based on patient id
                                if(indexedArray==-1)//if patient with given patient id not found
                                {
                                    throw `patient with patient id ${pid} does not exist`;
                                }
                                if(indexedArray instanceof Error)//indexedArray instance of Error
                                {
                                    throw indexedArray.message.toString();
                                }
                                let tc1=this.managementObj.showPatientDetails(indexedArray);//shows details patient based on index
                                if(tc1 instanceof Error)//tc1 instance of Error
                                {
                                    throw tc1.message.toString();
                                }
                            }
                                break;
                            case 2: {
                                process.stdout.write('\tenter patient name :');
                                let pname = utility.getName();//take name of patient from user
                                if(pname instanceof Error)//pname istsnce of Error
                                {
                                    throw pname.message.toString();
                                }
                                let indexedArray = this.managementObj.getPatientByName(pname);//get array index based on patient name
                                if(indexedArray==-1)//patient with given name not found
                                {
                                    throw `patient with name ${pname} does not exist`;
                                }
                                if(indexedArray instanceof Error)//indexedArray is instance of error
                                {
                                    throw indexedArray.message.toString();
                                }
                                let tc1=this.managementObj.showPatientDetails(indexedArray);//shows details of patient
                                if(tc1 instanceof Error)//if tc1 instance of error
                                {
                                    throw tc1.message.toString();
                                }
                            }
                                break;
                            case 3: {
                                process.stdout.write('\tenter mobile number :');
                                let mobilenumber = utility.getMobileNumber();//take patient mobile number from user
                                let indexedArray = this.managementObj.getPatientByMobileNumber(mobilenumber);
                                if(indexedArray==-1)//patient with given mobile number not found
                                {
                                    throw `Patient with mobile number ${mobilenumber} does not exist`;
                                }
                                if(indexedArray instanceof Error)//indexedArray instanceof error
                                {
                                    throw indexedArray.message.toString();
                                }
                                let tc1=this.managementObj.showPatientDetails(indexedArray);//shows details of patient
                                if(tc1 instanceof Error)
                                {
                                    throw tc1.message.toString();
                                }
                            }
                                break;
                            default: console.log('Invalid Choice');
                        }
                    }
                    break;
                    case 3: {//take direct appointment by doctor name
                        process.stdout.write('\tenter the doctor name :');
                        let doctorname = utility.getName();//take doctor name as input from user
                        doctorname = 'Dr.' + doctorname;
                        let idArray = this.managementObj.getDoctorByName(doctorname);//find array index by doctor name
                        this.managementObj.showDoctorDetails(idArray);//shows details of doctors
                        process.stdout.write('\tdo you want appointment(yes/no) :');
                        let replyOFAppointment = utility.getString();
                        if (replyOFAppointment == 'yes') {
                            let appoinetmentDate = this.managementObj.findAppointmentDate(idArray);//find appointement date
                            process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);//take user decision
                            let replyofSchedule = utility.getString();
                            if (replyofSchedule == 'yes') {
                                this.takeAppointment(idArray, appoinetmentDate);//fixed appointment
                            }
                        }
                    }
                        break;
                    case 4: process.exit();
                    default: console.log(`invalid choice`);
                }

            } while (opertionChoice != 4);
        } catch (e) {
            console.log(`Error occured :${e}`);
        }
    }
    takeAppointment(doctorArrayIndex, appointmentDate) {
        try {
            process.stdout.write(`\nare you new patient (yes/no)`);
            let isNew = utility.getString();//asked user whether he/she is new patient
            let patientid;
            if (isNew == 'yes') {//if yes take following information
                process.stdout.write('enter patient name :');
                let name = utility.getName();
                if(name instanceof Error)
                {
                    throw name.message.toString();
                }
                process.stdout.write('enter mobile number :');
                let mobilenumber = utility.getMobileNumber();
                if(mobilenumber instanceof Error)
                {
                    throw mobilenumber.message.toString();
                }
                process.stdout.write('enter age of the patient :');
                let age = utility.getInputNumber();
                patientid = this.managementObj.addNewPatient(name, mobilenumber, age);
            }
            else {//if no new patient asked for previous id
                process.stdout.write('enter patient id :');
                patientid = utility.getInputNumber();
            }
            
            let isSchedule = this.managementObj.addAppointment(patientid, doctorArrayIndex, appointmentDate);//call appintment method
            if (isSchedule == true) {
                console.log(`your appointment is schedule on ${appointmentDate}`);
            }
            if(isSchedule instanceof Error)//isSchedule instance of error
            {
                throw isSchedule.message.toString();
            }
            
        } catch (e) {
            return e;
        }
    }

}
module.exports = { MainClass };

let obj = new MainClass();
// let today = new Date().toISOString().slice(0, 10);
// console.log(today);
// var now = new Date();
// var dateString = moment(now).format('DD-MM-YYYY');
// console.log(dateString);
obj.main();
