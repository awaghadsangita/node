"use strict";
var Doctor = /** @class */ (function () {
    function Doctor() {
        this.doctorid = 0;
        this.doctorname = '';
        this.specialization = '';
        this.availability = '';
    }
    Object.defineProperty(Doctor.prototype, "getDoctorid", {
        get: function () {
            return this.doctorid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doctor.prototype, "setDoctorid", {
        set: function (id) {
            this.doctorid = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doctor.prototype, "getDoctorName", {
        get: function () {
            return this.doctorname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doctor.prototype, "setDoctorName", {
        set: function (name) {
            this.doctorname = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doctor.prototype, "getSpecialization", {
        get: function () {
            return this.specialization;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doctor.prototype, "setSpecialization", {
        set: function (specialization) {
            this.specialization = specialization;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doctor.prototype, "getAvailability", {
        get: function () {
            return this.availability;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doctor.prototype, "setAvailability", {
        set: function (shift) {
            this.availability = shift;
        },
        enumerable: true,
        configurable: true
    });
    return Doctor;
}());
var Patient = /** @class */ (function () {
    function Patient() {
        this.patientid = 0;
        this.patientname = '';
        this.age = 0;
        this.mobilenumber = 0;
    }
    Object.defineProperty(Patient.prototype, "getPatientid", {
        get: function () {
            return this.patientid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "setPatientid", {
        set: function (id) {
            this.patientid = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "getPatientname", {
        get: function () {
            return this.patientname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "setPatientname", {
        set: function (name) {
            this.patientname = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "setAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "getMobilenumber", {
        get: function () {
            return this.mobilenumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "setMobilenumber", {
        set: function (ph) {
            this.mobilenumber = ph;
        },
        enumerable: true,
        configurable: true
    });
    return Patient;
}());
var Appoinetment = /** @class */ (function () {
    function Appoinetment() {
        this.appointmentid = 0;
        this.patientid = 0;
        this.doctorid = 0;
        this.date = "";
    }
    return Appoinetment;
}());
exports = { Patient: Patient, Doctor: Doctor, Appoinetment: Appoinetment };
