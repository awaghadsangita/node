/*********************************************************************************************************
 * @purpose	:this class contain various method required for clinique managements
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
const fs = require('fs');
const moment = require('moment');
const classUtility = require('./GetterSetterUtility');

const doctorFileName = './doctor.json';
const patientFileName = './patient.json';
const appointmentFileName = './appointment.json';
class CliniqueOperation {
    constructor() {//declared various array to hold json array
        this.patientArray = [];
        this.doctorArray = [];
        this.appointmentArray = [];

    }
    /**
     * read patient json file and take data into patientArray
     */
    getPatientJsonArray() {
        let patientString = fs.readFileSync(patientFileName);
        this.patientArray = JSON.parse(patientString);
        return this.patientArray;
    }
    /**
     * read doctor json file and take data into doctorArray
     */
    getDoctorJsonArray() {
        let doctorString = fs.readFileSync(doctorFileName);
        this.doctorArray = JSON.parse(doctorString);
        return this.doctorArray;
    }
    /**
     * read appointment json file and take data into appointmentArray
     */
    getAppointmentJsonArray() {
        let appointmentString = fs.readFileSync(appointmentFileName);
        this.appointmentArray = JSON.parse(appointmentString);
        return this.appointmentArray;
    }
    /**
     * 
     * @param {*} doctorid :find array index for doctorArray based on doctorid
     */
    getDoctorArrayId(doctorid) {
        try {
            if (doctorid === undefined) {
                throw new Error('doctor id should not be undefined');
            }
            if (doctorid == null) {
                throw new Error('doctor id should not be null');
            }

            if (typeof doctorid != 'number') {
                throw new Error('doctor id should be number');
            }

            let index = -1;
            for (let i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i].doctorId == doctorid) {
                    index = i;
                    break;
                }
            }
            return index;
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} patientid :find array index of patientArray based on patient id
     */
    getPatientArrayIndex(patientid) {
        let index = -1;
        for (let i = 0; i < this.patientArray.length; i++) {
            if (this.patientArray[i].patientid == patientid) {
                index = i;
                break;
            }
        }
        return index;
    }
    /**
     * 
     * @param {*} doctorName :doctorname based on that find doctorArray index
     */
    getDoctorByName(doctorName) {
        try {
            if (doctorName === undefined)
                throw new Error('doctor name should not be undefined');
            if (doctorName == null)
                throw new Error('doctor name should not be null');
            if (typeof doctorName != 'string')
                throw new Error('doctor name should be string');
            let doctorArrayIndex = [];
            let isFound = false;
            for (let i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i].doctorName.toLowerCase() == doctorName.toLowerCase()) {
                    doctorArrayIndex.push(i);
                    isFound = true;
                }
            }
            if (isFound == false) {
                return -1;
            }

            return doctorArrayIndex;
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} specialization :doctor specialization find array doctorarray index with same specialization
     */
    getDoctorBySpecialization(specialization) {
        try {
            if (specialization === undefined) {
                throw new Error('specialization should not be undefined');
            }
            if (specialization == null) {
                throw new Error('specialization should not be null');
            }
            let regex = /^[a-zA-Z]{1,}$/
            if (!regex.test(specialization)) {
                throw new Error('specialization should not be contain special symbol');
            }
            let doctorArrayIndex = [];
            let isFound = false;
            for (let i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i].specialization.toLocaleLowerCase().search(specialization.toLocaleLowerCase()) != -1) {
                    doctorArrayIndex.push(i);
                    isFound = true;
                }
            }
            if (isFound == false) {
                return -1;
            }
            return doctorArrayIndex;
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} availability :doctor availability find array doctorarray index with same availability
     */
    getDoctorByAvailability(availability) {
        try {
            if (availability != 'AM' || availability != 'PM' || availability != 'BOTH') {
                throw new Error('invalid availability');
            }
            let doctorArrayIndex = []
            for (let i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i].availability == availability || this.doctorArray[i].availability == 'BOTH') {
                    doctorArrayIndex.push(i);
                }
            }
            return doctorArrayIndex;
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} id :patient id 
     * @return :array index of patientArray based id
     */
    getPatientById(id) {
        try {
            if (id === undefined) {
                throw new Error('patient id should not be undefined');
            }
            if (id == null) {
                throw new Error('patient id should not be null');
            }
            if (typeof id != 'number') {
                throw new Error('patient id should be number');
            }
            let patientArrayIndex;
            let isFound = false;
            for (let i = 0; i < this.patientArray.length; i++) {
                if (this.patientArray[i].patientId == id) {
                    patientArrayIndex = i;
                    isFound = true;
                }
            }
            if (isFound == false) {
                return -1;
            }
            return patientArrayIndex;
        } catch (e) {
            return e
        }
    }
    /**
     * 
     * @param {*} patientName :patient name
     * @returns:array index of patientArray based on patient name
     */
    getPatientByName(patientName) {
        try {
            var format = /^[a-zA-Z]+[\-'\s]{1,}[a-zA-Z]+$/;
            if (!format.test(patientName)) {
                throw new Error('name must contain first name and last name and letters only');
            }
            let patientArrayIndex = []
            let isFound = false;
            for (let i = 0; i < this.patientArray.length; i++) {
                if (this.patientArray[i].patientName.toLowerCase() == patientName.toLowerCase()) {
                    patientArrayIndex.push(i);
                    isFound = true;
                }
            }
            if (isFound == false) {
                return -1;
            }
            return patientArrayIndex;
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} mobileNumber :patient mobile number
     * @returns:array index patientArray based on patient mobile number
     */
    getPatientByMobileNumber(mobileNumber) {
        try {
            let regex = /^[7-9]{1}[0-9]{9}$/;
            if(!regex.test(mobileNumber))
            {
                throw new Error('invalid mobile number');
            }
            let patientArrayIndex = []
            let isFound=false;
            for (let i = 0; i < this.patientArray.length; i++) {
                if (this.patientArray[i].mobileNumber == mobileNumber) {
                    patientArrayIndex.push(i);
                    isFound=true;
                }
            }
            if(isFound==false)
            {
                return -1;
            }
            return patientArrayIndex;
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} doctorArrayIndex :gives index of doctorArray
     * @returns:returns next appointment date
     */
    findAppointmentDate(doctorArrayIndex) {
        try {
            if (doctorArrayIndex === undefined) {
                throw new Error('array should not be undefined');
            }
            if (doctorArrayIndex == null) {
                throw new Error('array should not be null');
            }
            if (typeof doctorArrayIndex != 'number') {
                throw new Error('array index should be number');
            }
            var currentDate = moment(new Date()).format('DD-MM-YYYY');
            let count = 0;
            let todayDate = moment(new Date()).format('DD-MM-YYYY');
            let lastAppointment = todayDate;
            let i = 1;
            for (let i = 0; i < this.appointmentArray.length; i++) {

                if (this.appointmentArray[i].doctorId == this.doctorArray[doctorArrayIndex].doctorId) {

                    if (this.appointmentArray[i].appointmentDate >= currentDate) {
                        count = count + 1;
                        lastAppointment = todayDate;
                        if (count == 5) {
                            count = 0;
                            todayDate = moment(new Date()).add(i++, 'day').format('DD-MM-YYYY');
                        }
                    }
                }
            }
            if (count == 0 && lastAppointment > currentDate) {
                todayDate = moment(new Date()).add(i++, 'day').format('DD-MM-YYYY');
                lastAppointment = todayDate;
            }

            return lastAppointment;
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} array :given array of index
     * @description:show details of doctor 
     */
    showDoctorDetails(array) {
        try {

            if (!Array.isArray(array) && array === undefined) {
                throw new Error('argument to show doctor details method should not be undefined');
            }
            if (!Array.isArray(array) && array == null) {
                throw new Error('argument to show doctor details method should not be null');
            }

            if (!Array.isArray(array) && typeof array != 'number') {
                throw new Error('argument to show doctor details method should be number');
            }
            if (Array.isArray(array)) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === undefined) {
                        throw new Error('argument to show doctor details method is array then array element should not be undefined');
                    }
                    if (array[i] == null) {
                        throw new Error('argument to show doctor details method is array then array element should not be null');
                    }
                    if (typeof array[i] != 'number') {
                        throw new Error('argument to show doctor details method is array then array element should be number');
                    }
                }
            }
            if (!Array.isArray(array)) {
                console.log('......................................................')
                console.log(`\t\tDoctor Id :${this.doctorArray[array].doctorId}`);
                console.log(`\t\tName :${this.doctorArray[array].doctorName}`);
                console.log(`\t\tSpecialization :${this.doctorArray[array].specialization}`);
                console.log(`\t\tAvailability:${this.doctorArray[array].availability}`);
            }
            else {
                for (let i = 0; i < array.length; i++) {
                    console.log('......................................................')
                    console.log(`\t\tDoctor Id :${this.doctorArray[array[i]].doctorId}`);
                    console.log(`\t\tName :${this.doctorArray[array[i]].doctorName}`);
                    console.log(`\t\tSpecialization :${this.doctorArray[array[i]].specialization}`);
                    console.log(`\t\tAvailability:${this.doctorArray[array[i]].availability}`);
                }
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} array :array of index of patient array
     * @description:show details patients
     */
    showPatientDetails(array) {
        try {
            if (!Array.isArray(array)) {
                if (array === undefined) {
                    throw new Error('array index should not be undefined');
                }
                if (array == null) {
                    throw new Error('array index should not be null');
                }
                if (typeof array != 'number') {
                    throw new Error('array index should be number');
                }
            }
            if (Array.isArray(array)) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === undefined) {
                        throw new Error('array element should not be undefined');
                    }
                    if (array[i] == null) {
                        throw new Error('array element should not be null');
                    }
                    if (typeof array[i] != 'number') {
                        throw new Error('array element should be number');
                    }
                }
            }
            if (!Array.isArray(array)) {
                console.log('......................................................')
                console.log(`\t\tPatient Id :${this.patientArray[array].patientId}`);
                console.log(`\t\tName :${this.patientArray[array].patientName}`);
                console.log(`\t\tMobile Number :${this.patientArray[array].mobileNumber}`);
                console.log(`\t\tAge:${this.patientArray[array].age}`);
            }
            else {
                for (let i = 0; i < array.length; i++) {
                    console.log('......................................................')
                    console.log(`\t\tPatient Id :${this.patientArray[array[i]].patientId}`);
                    console.log(`\t\tName :${this.patientArray[array[i]].patientName}`);
                    console.log(`\t\tMobile Number :${this.patientArray[array[i]].mobileNumber}`);
                    console.log(`\t\tAge:${this.patientArray[array[i]].age}`);
                }
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:add new petient into patientArray
     * @param {*} name :name of new Person
     * @param {*} mobilenumber :mobile number of new person
     * @param {*} age :age of new person
     */
    addNewPatient(name, mobilenumber, age) {
        try {
            if (name === undefined) {
                throw new Error('name should not be undefined');
            }
            if (name == null) {
                throw new Error('name should not be null')
            }
            var format = /^[a-zA-Z]+[\-'\s]{1,}[a-zA-Z]+$/;
            if (!format.test(name)) {
                throw new Error('name must contain first name and last name and letters only');
            }
            if (mobilenumber === undefined) {
                throw new Error('mobile number should not be undefined');
            }
            if (mobilenumber == null) {
                throw new Error('mobile number should not be null');
            }
            var regex = /^[7-9]{1}[0-9]{9}$/;
            if (!regex.test(mobilenumber)) {
                throw new Error('mobile number should start with 7 or 8 or 9 must be 10 digit long');
            }
            if (age <= 0) {
                throw new Error('age must be greater than zero');
            }
            let patientObj = new classUtility.Patient();
            let patientid = this.patientArray[this.patientArray.length - 1].patientId + 1;
            patientObj.setPatientId(patientid);
            patientObj.setPatientName(name);
            patientObj.setMobileNumber(mobilenumber);
            patientObj.setAge(age);
            this.patientArray.push(patientObj);//push patient object into patient Array
            this.writeJsonArrayToFile(patientFileName, this.patientArray);//call write method to save data into file
            return patientid;
        } catch (e) {
            return e;
        }
    }
    /**
     * @description:add appointment into appointment file
     * @param {*} patientid :patient id
     * @param {*} doctorarrayindex :doctor array index
     * @param {*} date :appoinyment date
     */
    addAppointment(patientid, doctorarrayindex, date) {
        try {
            if (patientid === undefined) {
                throw new Error('patient id should not be undfined');
            }
            if (patientid == null) {
                throw new Error('patient id should not be null');
            }
            if (typeof patientid != 'number') {
                throw new Error('patient id should be number');
            }
            if (doctorarrayindex === undefined) {
                throw new Error('doctor array index should not be undfined');
            }
            if (doctorarrayindex == null) {
                throw new Error('doctor array index should not be null');
            }
            if (typeof doctorarrayindex != 'number') {
                throw new Error('doctor array index should be number');
            }
            if (date < moment(new Date()).format('DD-MM-YYYY')) {
                throw new Error('appointment date should be greater than or equal to today date');
            }
            let appointmentObj = new classUtility.Appointment();
            appointmentObj.setAppointmentId(this.appointmentArray[this.appointmentArray.length - 1].appointmentId + 1);
            appointmentObj.setPatientId(patientid);
            appointmentObj.setDoctorId(this.doctorArray[doctorarrayindex].doctorId);
            appointmentObj.setAppointmentDate(date);
            this.appointmentArray.push(appointmentObj);//push appointment Object to appointmentArray
            this.writeJsonArrayToFile(appointmentFileName, this.appointmentArray);//write appointment array to appointment file
            return true;
        } catch (e) {
            console.log(e)
            return e;
        }
    }
    /**
     * @description:write given array into given file
     * @param {*} filename :name of file
     * @param {*} jsonArray :name of array
     */
    writeJsonArrayToFile(filename, jsonArray) {
        let jsonContent = JSON.stringify(jsonArray);
        fs.writeFileSync(filename, jsonContent);
        this.getDoctorJsonArray();
        this.getPatientJsonArray();
        this.getAppointmentJsonArray();
    }
}
module.exports = { CliniqueOperation }