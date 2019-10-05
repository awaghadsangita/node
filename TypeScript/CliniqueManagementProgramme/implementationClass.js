"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var moment = require("moment");
var ImplementationClass = /** @class */ (function () {
    function ImplementationClass() {
        this.doctorArray = new Array();
        this.patientArray = new Array();
        this.appointmentArray = new Array();
    }
    /**
     * @description:read doctor json file and store data in doctorArray
     */
    ImplementationClass.prototype.readDoctorJsonFile = function () {
        try {
            var doctorjsonFilename = './doctor.json';
            var jsonString = fs.readFileSync(doctorjsonFilename);
            this.doctorArray = JSON.parse(jsonString.toString());
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:read patient json file and store data patientArray
     */
    ImplementationClass.prototype.readPatientJsonFile = function () {
        try {
            var patientjsonFilename = './patient.json';
            var jsonString = fs.readFileSync(patientjsonFilename);
            this.patientArray = JSON.parse(jsonString.toString());
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:read appointment json file and store data in appointmentArray
     */
    ImplementationClass.prototype.readAppoinentmentJsonfile = function () {
        try {
            var appointmentjsonFilename = './appointment.json';
            var jsonString = fs.readFileSync(appointmentjsonFilename);
            this.appointmentArray = JSON.parse(jsonString.toString());
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:gives date on which doctor is available
     * @param arrayindex :doctor array index given by others methods
     */
    ImplementationClass.prototype.findAppointmentDate = function (arrayindex) {
        try {
            if (arrayindex == undefined || arrayindex == null) {
                throw new Error('array index should not be null or undefined');
            }
            if (arrayindex < 0) {
                throw new Error('array index should not be negative');
            }
            var date = moment(new Date()).format('DD-MM-YYYY');
            var appointmentDate = moment(new Date()).format('DD-MM-YYYY');
            ;
            var count = 0;
            var daycount = 1;
            for (var i = 0; i < this.appointmentArray.length; i++) {
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
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:search doctor by doctor id
     * @param did :id of doctor
     */
    ImplementationClass.prototype.getDoctorById = function (did) {
        try {
            if (did == undefined || did == null) {
                throw new Error('doctor id should not be null or undefined');
            }
            if (did < 0) {
                throw new Error('doctor id should not be negative');
            }
            var index = -1;
            var arrayIndex = [];
            for (var i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i]['doctorid'] == did) {
                    index = i;
                    arrayIndex.push(i);
                }
            }
            if (index == -1) {
                arrayIndex[0] = -1;
                return arrayIndex;
            }
            return arrayIndex;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:search doctor by doctor name
     * @param name :name of doctor
     */
    ImplementationClass.prototype.getDoctorByName = function (name) {
        try {
            if (name == undefined || name == null) {
                throw new Error('doctor name should not be null or undefined');
            }
            var nameRegx = /^[a-zA-Z]{2,}$/;
            if (!nameRegx.test(name)) {
                throw new Error('doctor name should contains letters only');
            }
            var index = -1;
            var arrIndex = [];
            for (var i = 0; i < this.doctorArray.length; i++) {
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
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:gives doctor of list of doctor by specialzation
     * @param specialization :specialzation of doctor
     */
    ImplementationClass.prototype.getDoctorBySpecializtion = function (specialization) {
        try {
            if (specialization == undefined || specialization == null) {
                throw new Error('doctor specialization should not be null or undefined');
            }
            var isFound = -1;
            var arrIndex = [];
            // specialization.toLocaleLowerCase()
            for (var i = 0; i < this.doctorArray.length; i++) {
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
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:gives doctor or list of doctors by availability
     * @param availability :availabilbility
     */
    ImplementationClass.prototype.getDoctorByAvailability = function (availability) {
        try {
            if (availability == undefined || availability == null) {
                throw new Error('doctor availability should not be null or undefined');
            }
            var reg = /^[a-zA-Z]{2,}$/;
            if (!reg.test(availability)) {
                throw new Error('doctor availability should not contains numbers');
            }
            var index = -1;
            var arrayIndex = new Array();
            for (var i = 0; i < this.doctorArray.length; i++) {
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
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:shows doctor details
     * @param index :array index of doctorArray
     */
    ImplementationClass.prototype.showDoctorDetails = function (index) {
        try {
            if (index == undefined || index == null) {
                throw new Error('array index should not be null or undefined');
            }
            for (var i = 0; i < index.length; i++) {
                if (index[i] <= -1) {
                    throw new Error('array element of array should not be negative');
                }
            }
            console.log('*******************DOCTOR DETAILS*******************');
            for (var i = 0; i < index.length; i++) {
                console.log('Doctor Id :', this.doctorArray[index[i]]['doctorid']);
                console.log('Doctor Name :', this.doctorArray[index[i]]['doctorname'].toLocaleLowerCase());
                console.log('Specilization :', this.doctorArray[index[i]]['specialization'].toLocaleLowerCase());
                console.log('Availability :', this.doctorArray[index[i]]['availability'].toLocaleLowerCase());
                console.log('****************************************************');
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:find patient by patient id
     * @param id :id of Patient
     */
    ImplementationClass.prototype.getPatientById = function (id) {
        try {
            if (id == undefined || id == null) {
                throw new Error('patient id should not be null or undefined');
            }
            if (typeof id != 'number') {
                throw new Error('patient id should not be string');
            }
            var index = -1;
            var arrayIndex = new Array();
            for (var i = 0; i < this.patientArray.length; i++) {
                if (this.patientArray[i]['patientid'] === id) {
                    index = i;
                    arrayIndex.push(i);
                }
            }
            if (index === -1) {
                return arrayIndex.push(-1);
            }
            return arrayIndex;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:find patient by patient name
     * @param name :name of patient
     */
    ImplementationClass.prototype.getPatientByName = function (name) {
        try {
            if (name == undefined || name == null) {
                throw new Error('patient name should not be null or undefined');
            }
            var nameRegx = /^[a-zA-Z ]{2,}$/;
            if (!nameRegx.test(name)) {
                throw new Error('patient name should not digit and atleast 2 character long');
            }
            var index = -1;
            var arrayIndex = [];
            for (var i = 0; i < this.patientArray.length; i++) {
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
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:find patient by mobile number
     * @param ph :mobile number of patient
     */
    ImplementationClass.prototype.getPatientByMobileNumber = function (ph) {
        try {
            if (ph == undefined || ph == null) {
                throw new Error('patient mobile number should not be null or undefined');
            }
            var phRegx = /^[7-9]{1}[0-9]{9}$/;
            if (!phRegx.test(ph.toString())) {
                throw new Error('patient mobile number should start with 7,8 or 9 and must be 10 digit long');
            }
            var index = -1;
            var arrayIndex = [];
            for (var i = 0; i < this.patientArray.length; i++) {
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
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:shows details of patient
     * @param index :array index of patient array
     */
    ImplementationClass.prototype.showPatientDetails = function (index) {
        try {
            if (index == undefined || index == null) {
                throw new Error('array index should not be null or undefined');
            }
            for (var i = 0; i < index.length; i++) {
                if (index[i] <= -1) {
                    throw new Error('array element of array should not be negative');
                }
            }
            console.log('*******************PATIENT DETAILS*******************');
            for (var i = 0; i < index.length; i++) {
                console.log('Patient Id :', this.patientArray[index[i]]['patientid']);
                console.log('Patient Name :', this.patientArray[index[i]]['patientname'].toLocaleLowerCase());
                console.log('Age :', this.patientArray[index[i]]['age']);
                console.log('Mobile Number :', this.patientArray[index[i]]['mobilenumber']);
                console.log('****************************************************');
            }
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:schedule appointment with doctor
     * @param arrayindex :array index doctor array
     * @param date :appointment date
     * @param pid :person id
     */
    ImplementationClass.prototype.scheduleAppointment = function (arrayindex, date, pid) {
        try {
            if (arrayindex == undefined || arrayindex == null) {
                throw new Error('array index should not be null or undefined');
            }
            if (typeof arrayindex != 'number') {
                throw new Error('array index should be number');
            }
            if (date == undefined || date == null) {
                throw new Error('date should not be null or undefined');
            }
            if (pid == undefined || pid == null) {
                throw new Error('patient id should not be null or undefined');
            }
            if (typeof pid != 'number') {
                throw new Error('patient id should be number');
            }
            var id = this.appointmentArray[this.appointmentArray.length - 1]['appointmentid'] + 1;
            var object = { "appointmentid": id, "patientid": pid, "doctorid": this.doctorArray[arrayindex]['doctorid'], "date": date };
            this.appointmentArray.push(object);
            // for (let i = 0; i < this.appointmentArray.length; i++) {
            //     console.log(this.appointmentArray[i]['appointmentid']);
            // }
            this.saveToAppointmentJsonFile(this.appointmentArray);
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:save appintment json object array into appointment.json file
     * @param arr :json object array
     */
    ImplementationClass.prototype.saveToAppointmentJsonFile = function (arr) {
        try {
            if (arr == undefined || arr == null) {
                throw new Error('array should not be null or undefined');
            }
            var jsonString = JSON.stringify(arr);
            fs.writeFileSync('./appointment.json', jsonString);
            this.readAppoinentmentJsonfile();
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description :add person into patient list
     * @param name :name of patient
     * @param age :age of patient
     * @param ph :mobile number of patient
     */
    ImplementationClass.prototype.addPatient = function (name, age, ph) {
        try {
            if (name == undefined || name == null) {
                throw new Error('name should not be null or undefined');
            }
            var nameReg = /^[a-zA-Z ]{2,}$/;
            if (!nameReg.test(name)) {
                throw new Error('name should contain atleast two characters and it should be letters only');
            }
            if (age == undefined || age == null) {
                throw new Error('age not be null or undefined');
            }
            if (typeof age != 'number') {
                throw new Error('age should be number');
            }
            if (ph == undefined || ph == null) {
                throw new Error('phone number not be null or undefined');
            }
            var phRegx = /^[7-9]{1}[0-9]{9}$/;
            if (!phRegx.test(ph.toString())) {
                throw new Error('patient mobile number should start with 7,8 or 9 and must be 10 digit long');
            }
            var id = this.patientArray[this.patientArray.length - 1]['patientid'] + 1;
            var obj = { "patientid": id, "patientname": name, "age": age, "mobilenumber": ph };
            this.patientArray.push(obj);
            this.saveToPatientJsonFile();
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:save array of patient json object into patient.json
     */
    ImplementationClass.prototype.saveToPatientJsonFile = function () {
        try {
            var jsonString = JSON.stringify(this.patientArray);
            fs.writeFileSync('./patient.json', jsonString);
            this.readPatientJsonFile();
        }
        catch (e) {
            return e;
        }
    };
    /**
     * @description:find popular doctor by counting number of appointments
     */
    ImplementationClass.prototype.findPopularDoctor = function () {
        try {
            var count = 0;
            var list = [{ 'doctorid': 0, 'count': 0 }];
            for (var i = 0; i < this.doctorArray.length; i++) {
                for (var j = 0; j < this.appointmentArray.length; j++) {
                    if (this.appointmentArray[j]['doctorid'] == this.doctorArray[i]['doctorid']) {
                        count++;
                    }
                }
                list.push({ 'doctorid': this.doctorArray[i]['doctorid'], 'count': count });
            }
            var MAX = 0;
            var obj = { 'doctorid': 0, 'count': 0 };
            for (var i = 0; i < list.length; i++) {
                if (MAX < list[i]['count']) {
                    obj = list[i];
                    MAX = list[i]['count'];
                }
            }
            console.log('**********************POPULAR DOCTOR**********************');
            for (var i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i]['doctorid'] == obj['doctorid']) {
                    console.log('Doctor Id :', this.doctorArray[i]['doctorid']);
                    console.log('Doctor Name :', this.doctorArray[i]['doctorname'].toLocaleLowerCase());
                    console.log('Specilization :', this.doctorArray[i]['specialization'].toLocaleLowerCase());
                    console.log('Availability :', this.doctorArray[i]['availability'].toLocaleLowerCase());
                    console.log('******************************************************');
                }
            }
        }
        catch (e) {
            return e;
        }
    };
    return ImplementationClass;
}());
exports.ImplementationClass = ImplementationClass;
