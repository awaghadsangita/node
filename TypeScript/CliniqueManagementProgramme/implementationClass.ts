/*********************************************************************************************************
 * @purpose	:contain all methods required for cliniq management
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 * 
 **********************************************************************************************************/
import {IClinique }from './IClinique';
 import * as fs from 'fs';
import * as moment from 'moment';
import { type } from 'os';

class ImplementationClass implements IClinique{
    private doctorArray = new Array();
    private patientArray = new Array();
    private appointmentArray = new Array();
    /**
     * @description:read doctor json file and store data in doctorArray
     */
    readDoctorJsonFile():any{
        try {
            let doctorjsonFilename = './doctor.json'
            let jsonString = fs.readFileSync(doctorjsonFilename);
            this.doctorArray = JSON.parse(jsonString.toString());

        } catch (e) {
            return e;
        }
    }
    /**
     * @description:read patient json file and store data patientArray
     */
    readPatientJsonFile():any {
        try {
            let patientjsonFilename = './patient.json';
            let jsonString = fs.readFileSync(patientjsonFilename);
            this.patientArray = JSON.parse(jsonString.toString());
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:read appointment json file and store data in appointmentArray
     */
    readAppoinentmentJsonfile():any {
        try {
            let appointmentjsonFilename = './appointment.json';
            let jsonString = fs.readFileSync(appointmentjsonFilename);
            this.appointmentArray = JSON.parse(jsonString.toString());
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:gives date on which doctor is available
     * @param arrayindex :doctor array index given by others methods
     */
    findAppointmentDate(arrayindex: number): any {
        try {
            if (arrayindex == undefined || arrayindex == null) {
                throw new Error('array index should not be null or undefined')
            }
            if (arrayindex < 0) {
                throw new Error('array index should not be negative')
            }
            let date = moment(new Date()).format('DD-MM-YYYY');
            let appointmentDate = moment(new Date()).format('DD-MM-YYYY');;
            let count: number = 0;
            let daycount = 1;
            for (let i = 0; i < this.appointmentArray.length; i++) {
                if (this.doctorArray[arrayindex]['doctorid'] == this.appointmentArray[i]['doctorid']) {
                    count++;
                }
                if (count == 5) {
                    date = moment(new Date()).add(daycount++, 'day').format('DD-MM-YYYY');
                    count = 0;
                }
                appointmentDate = date;
            }
            return appointmentDate;
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:search doctor by doctor id
     * @param did :id of doctor
     */
    getDoctorById(did: number): any {
        try {
            if (did == undefined || did == null) {
                throw new Error('doctor id should not be null or undefined');
            }
            if (did < 0) {
                throw new Error('doctor id should not be negative');
            }
            let index: number = -1;
            let arrayIndex = [];
            for (let i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i]['doctorid'] == did) {
                    index = i;
                    arrayIndex.push(i);

                }
            }

            if (index == -1) {
                arrayIndex[0] = -1
                return arrayIndex;
            }
            return arrayIndex;

        } catch (e) {
            return e;
        }
    }
    /**
     * @description:search doctor by doctor name
     * @param name :name of doctor
     */
    getDoctorByName(name: string): any {
        try {
            if (name == undefined || name == null) {
                throw new Error('doctor name should not be null or undefined');
            }
            let nameRegx: RegExp = /^[a-zA-Z]{2,}$/;
            if (!nameRegx.test(name)) {
                throw new Error('doctor name should contains letters only');
            }
            let index: number = -1;
            let arrIndex = [];

            for (let i = 0; i < this.doctorArray.length; i++) {
     
                if (this.doctorArray[i]['doctorname'] == name) {
                    index = i;
                    arrIndex.push(i);
                }
            }
            if (index == -1) {
                arrIndex.push(-1);
                return arrIndex;
            }
            else {
                return arrIndex;
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:gives doctor of list of doctor by specialzation
     * @param specialization :specialzation of doctor
     */
    getDoctorBySpecializtion(specialization: string): any {
        try {
            if (specialization == undefined || specialization == null) {
                throw new Error('doctor specialization should not be null or undefined');
            }
            let isFound = -1;
            let arrIndex = [];

            // specialization.toLocaleLowerCase()
            for (let i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i]['specialization'].toLocaleLowerCase().search(specialization.toLocaleLowerCase()) != -1) {
                    isFound = i;
                    arrIndex.push(i);
                }
            }
            if (isFound == -1) {
                return arrIndex[0] = -1;
            }
            if (isFound > -1)
                return arrIndex;
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:gives doctor or list of doctors by availability
     * @param availability :availabilbility
     */
    getDoctorByAvailability(availability: string): any {
        try {
            if (availability == undefined || availability == null) {
                throw new Error('doctor availability should not be null or undefined');
            }
            let reg: RegExp = /^[a-zA-Z]{2,}$/;
            if (!reg.test(availability)) {
                throw new Error('doctor availability should not contains numbers')
            }
            let index = -1;
            let arrayIndex = new Array();
            for (let i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i]['availability'].localeCompare(availability) === 0) {
                    index = i;
                    arrayIndex.push(i);
                }
            }
            if (index == -1) {
                return arrayIndex.push(-1);
            }
            else {
                return arrayIndex;
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:shows doctor details
     * @param index :array index of doctorArray
     */
    showDoctorDetails(index: number[]):any {
        try {
            if (index == undefined || index == null) {
                throw new Error('array index should not be null or undefined');
            }
            for (let i = 0; i < index.length; i++) {
                if (index[i] <= -1) {
                    throw new Error('array element of array should not be negative');
                }
            }
            console.log('*******************DOCTOR DETAILS*******************')
            for (let i = 0; i < index.length; i++) {
                console.log('Doctor Id :', this.doctorArray[index[i]]['doctorid']);
                console.log('Doctor Name :', this.doctorArray[index[i]]['doctorname'].toLocaleLowerCase());
                console.log('Specilization :', this.doctorArray[index[i]]['specialization'].toLocaleLowerCase());
                console.log('Availability :', this.doctorArray[index[i]]['availability'].toLocaleLowerCase());
                console.log('****************************************************')
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:find patient by patient id
     * @param id :id of Patient
     */
    getPatientById(id: number): any {
        try {
            if (id == undefined || id == null) {
                throw new Error('patient id should not be null or undefined');
            }
            if (typeof id != 'number') {
                throw new Error('patient id should not be string');
            }
            let index: number = -1;
            let arrayIndex = new Array();
            for (let i = 0; i < this.patientArray.length; i++) {
                if (this.patientArray[i]['patientid'] === id) {
                    index = i;
                    arrayIndex.push(i);
                }
            }
            if (index === -1) {
                return arrayIndex.push(-1);
            }

            return arrayIndex;

        } catch (e) {
            return e;
        }
    }
    /**
     * @description:find patient by patient name
     * @param name :name of patient
     */
    getPatientByName(name: string): any {
        try {
            if (name == undefined || name == null) {
                throw new Error('patient name should not be null or undefined');
            }

            let nameRegx: RegExp = /^[a-zA-Z ]{2,}$/;
            if (!nameRegx.test(name)) {
                throw new Error('patient name should not digit and atleast 2 character long');
            }
            let index = -1;
            let arrayIndex = [];
            for (let i = 0; i < this.patientArray.length; i++) {
                if (this.patientArray[i]['patientname'] == name) {
                    index = i;
                    arrayIndex.push(i);
                }
            }
            if (index == -1) {
                return arrayIndex.push(-1);
            }
            else {
                return arrayIndex;
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:find patient by mobile number
     * @param ph :mobile number of patient
     */
    getPatientByMobileNumber(ph: number): any {
        try {
            if (ph == undefined || ph == null) {
                throw new Error('patient mobile number should not be null or undefined');
            }

            let phRegx: RegExp = /^[7-9]{1}[0-9]{9}$/;
            if (!phRegx.test(ph.toString())) {
                throw new Error('patient mobile number should start with 7,8 or 9 and must be 10 digit long');
            }
            let index = -1;
            let arrayIndex = [];
            for (let i = 0; i < this.patientArray.length; i++) {
                if (this.patientArray[i]['mobilenumber'] == ph) {
                    index = i;
                    arrayIndex.push(i);
                }
            }
            if (index == -1) {
                return arrayIndex.push(-1);
            }
            else {
                return arrayIndex;
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:shows details of patient
     * @param index :array index of patient array
     */
    showPatientDetails(index: number[]):any {
        try {
            if (index == undefined || index == null) {
                throw new Error('array index should not be null or undefined');
            }
            for (let i = 0; i < index.length; i++) {
                if (index[i] <= -1) {
                    throw new Error('array element of array should not be negative');
                }
            }
            console.log('*******************PATIENT DETAILS*******************')
            for (let i = 0; i < index.length; i++) {
                console.log('Patient Id :', this.patientArray[index[i]]['patientid']);
                console.log('Patient Name :', this.patientArray[index[i]]['patientname'].toLocaleLowerCase());
                console.log('Age :', this.patientArray[index[i]]['age']);
                console.log('Mobile Number :', this.patientArray[index[i]]['mobilenumber']);
                console.log('****************************************************')
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:schedule appointment with doctor
     * @param arrayindex :array index doctor array
     * @param date :appointment date
     * @param pid :person id
     */
    scheduleAppointment(arrayindex: number, date: string, pid: number):any {
        try {
            if(arrayindex==undefined||arrayindex==null)
            {
                throw new Error('array index should not be null or undefined');
            }
            if(typeof arrayindex!='number')
            {
                throw new Error('array index should be number');
            }
            if(date==undefined||date==null)
            {
                throw new Error('date should not be null or undefined');
            }
            if(pid==undefined||pid==null)
            {
                throw new Error('patient id should not be null or undefined');
            }
            if(typeof pid!='number')
            {
                throw new Error('patient id should be number');
            }
            let id = this.appointmentArray[this.appointmentArray.length - 1]['appointmentid'] + 1;
            let object = { "appointmentid": id, "patientid": pid, "doctorid": this.doctorArray[arrayindex]['doctorid'], "date": date }
            this.appointmentArray.push(object);
            // for (let i = 0; i < this.appointmentArray.length; i++) {
            //     console.log(this.appointmentArray[i]['appointmentid']);
            // }
            this.saveToAppointmentJsonFile(this.appointmentArray);
        } catch (e) {
            
            return e;
        }
    }
    /**
     * @description:save appintment json object array into appointment.json file
     * @param arr :json object array
     */
    saveToAppointmentJsonFile(arr: any[]):any {
        try {
            if (arr == undefined || arr == null) {
                throw new Error('array should not be null or undefined');
            }
            let jsonString = JSON.stringify(arr);
            fs.writeFileSync('./appointment.json', jsonString);
            this.readAppoinentmentJsonfile();
        } catch (e) {
            return e;
        }
    }
    /**
     * @description :add person into patient list
     * @param name :name of patient
     * @param age :age of patient
     * @param ph :mobile number of patient
     */
    addPatient(name: string, age: number, ph: number):any {
        try {
            if (name == undefined || name == null) {
                throw new Error('name should not be null or undefined');
            }
            let nameReg:RegExp=/^[a-zA-Z ]{2,}$/;
            if(!nameReg.test(name))
            {
                throw new Error('name should contain atleast two characters and it should be letters only');
            }
            if (age == undefined || age == null) {
                throw new Error('age not be null or undefined');
            }
            if(typeof age !='number')
            {
                throw new Error('age should be number')
            }
            if (ph == undefined || ph == null) {
                throw new Error('phone number not be null or undefined');
            }
            let phRegx: RegExp = /^[7-9]{1}[0-9]{9}$/;
            if (!phRegx.test(ph.toString())) {
                throw new Error('patient mobile number should start with 7,8 or 9 and must be 10 digit long');
            }
            let id = this.patientArray[this.patientArray.length - 1]['patientid'] + 1;
            let obj = { "patientid": id, "patientname": name, "age": age, "mobilenumber": ph };
            this.patientArray.push(obj);
            this.saveToPatientJsonFile();
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:save array of patient json object into patient.json
     */
    saveToPatientJsonFile():any {
        try {
            let jsonString = JSON.stringify(this.patientArray);
            fs.writeFileSync('./patient.json', jsonString);
            this.readPatientJsonFile();
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:find popular doctor by counting number of appointments
     */
    findPopularDoctor():any {
        try {
            let count: number = 0;
            let list = [{ 'doctorid': 0, 'count': 0 }];
            for (let i = 0; i < this.doctorArray.length; i++) {
                for (let j = 0; j < this.appointmentArray.length; j++) {
                    if (this.appointmentArray[j]['doctorid'] == this.doctorArray[i]['doctorid']) {
                        count++;
                    }
                }
                list.push({ 'doctorid': this.doctorArray[i]['doctorid'], 'count': count });
            }
            let MAX = 0;
            let obj = { 'doctorid': 0, 'count': 0 };
            for (let i = 0; i < list.length; i++) {
                if (MAX < list[i]['count']) {
                    obj = list[i];
                    MAX = list[i]['count'];
                }
            }
            console.log('**********************POPULAR DOCTOR**********************');
            for (let i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i]['doctorid'] == obj['doctorid']) {
                    console.log('Doctor Id :', this.doctorArray[i]['doctorid']);
                    console.log('Doctor Name :', this.doctorArray[i]['doctorname'].toLocaleLowerCase())
                    console.log('Specilization :', this.doctorArray[i]['specialization'].toLocaleLowerCase());
                    console.log('Availability :', this.doctorArray[i]['availability'].toLocaleLowerCase());
                    console.log('******************************************************');
                }
            }

        } catch (e) {
            return e;
        }
    }
}
export { ImplementationClass };