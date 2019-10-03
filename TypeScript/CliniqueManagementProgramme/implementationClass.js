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
    ImplementationClass.prototype.findAppointmentDate = function (arrayindex) {
        try {
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
    ImplementationClass.prototype.getDoctorById = function (did) {
        try {
            var index = -1;
            var arrayIndex = [];
            for (var i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i]['doctorid'] == did) {
                    index = i;
                    arrayIndex.push(i);
                }
            }
            if (index == -1) {
                return arrayIndex[0] = -1;
            }
            else {
                return arrayIndex;
            }
        }
        catch (e) {
            return e;
        }
    };
    ImplementationClass.prototype.getDoctorByName = function (name) {
        try {
            var index = -1;
            var arrIndex = [];
            for (var i = 0; i < this.doctorArray.length; i++) {
                if (this.doctorArray[i]['doctorname'] == name) {
                    index = i;
                    arrIndex.push(i);
                }
            }
            if (index == -1) {
                return arrIndex.push(-1);
            }
            else {
                return arrIndex;
            }
        }
        catch (e) {
            return e;
        }
    };
    ImplementationClass.prototype.getDoctorBySpecializtion = function (specialization) {
        try {
            var isFound = -1;
            var arrIndex = [];
            var re = new RegExp(specialization.toLocaleLowerCase(), "gi");
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
    ImplementationClass.prototype.getDoctorByAvailability = function (availability) {
        try {
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
    ImplementationClass.prototype.showDoctorDetails = function (index) {
        console.log('*******************DOCTOR DETAILS*******************');
        for (var i = 0; i < index.length; i++) {
            console.log('Doctor Id :', this.doctorArray[index[i]]['doctorid']);
            console.log('Doctor Name :', this.doctorArray[index[i]]['doctorname'].toLocaleLowerCase());
            console.log('Specilization :', this.doctorArray[index[i]]['specialization'].toLocaleLowerCase());
            console.log('Availability :', this.doctorArray[index[i]]['availability'].toLocaleLowerCase());
            console.log('****************************************************');
        }
    };
    ImplementationClass.prototype.getPatientById = function (id) {
        try {
            var index = -1;
            var arrayIndex = new Array();
            for (var i = 0; i < this.patientArray.length; i++) {
                if (this.patientArray[i]['patientid'] === id) {
                    index = i;
                    arrayIndex.push(i);
                }
            }
            // if(index===-1)
            // { console.log('HHHHHHHHHHHiii')
            //     return arrayIndex.push(-1);
            // }
            return arrayIndex;
        }
        catch (e) {
            return e;
        }
    };
    ImplementationClass.prototype.getPatientByName = function (name) {
        try {
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
    ImplementationClass.prototype.getPatientByMobileNumber = function (ph) {
        try {
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
    ImplementationClass.prototype.showPatientDetails = function (index) {
        console.log('*******************PATIENT DETAILS*******************');
        for (var i = 0; i < index.length; i++) {
            console.log('Patient Id :', this.patientArray[index[i]]['patientid']);
            console.log('Patient Name :', this.patientArray[index[i]]['patientname'].toLocaleLowerCase());
            console.log('Age :', this.patientArray[index[i]]['age']);
            console.log('Mobile Number :', this.patientArray[index[i]]['mobilenumber']);
            console.log('****************************************************');
        }
    };
    ImplementationClass.prototype.scheduleAppointment = function (arrayindex, date, pid) {
        try {
            var id = this.appointmentArray[this.appointmentArray.length - 1]['appointmentid'] + 1;
            var object = { "appointmentid": id, "patientid": pid, "doctorid": this.doctorArray[arrayindex]['doctorid'], "date": date };
            this.appointmentArray.push(object);
            for (var i = 0; i < this.appointmentArray.length; i++) {
                console.log(this.appointmentArray[i]['appointmentid']);
            }
            this.saveToAppointmentJsonFile(this.appointmentArray);
        }
        catch (e) {
            0;
            return e;
        }
    };
    ImplementationClass.prototype.saveToAppointmentJsonFile = function (arr) {
        try {
            var jsonString = JSON.stringify(arr);
            fs.writeFileSync('./appointment.json', jsonString);
            this.readAppoinentmentJsonfile();
        }
        catch (e) {
            return e;
        }
    };
    ImplementationClass.prototype.addPatient = function (name, age, ph) {
        try {
            var id = this.patientArray[this.patientArray.length - 1]['patientid'] + 1;
            var obj = { "patientid": id, "patientname": name, "age": age, "mobilenumber": ph };
            this.patientArray.push(obj);
            this.saveToPatientJsonFile();
        }
        catch (e) {
            return e;
        }
    };
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
