/*********************************************************************************************************
 * @purpose	:this file contain Doctor class ,patinet class,appointment class variables and setters and getters
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:09-09-2019
 * 
 **********************************************************************************************************/
class Doctor {//doctor class and their variables getters and setters
    constructor() {
        this.doctorId;
        this.doctorName;
        this.specialization;
        this.availability;
        this.shifts;
    }
    getDoctorId() {
        return this.doctorId;
    }
    setDoctorId(doctorId) {
        this.doctorId = doctorId;
    }
    setDoctorName() {
        return this.doctorName;
    }
    setDoctorName(doctorName) {
        this.doctorName = doctorName;
    }
    getSpecialization() {
        return this.specialization;
    }
    setSpecialization(specialization) {
        this.specialization = specialization;
    }
    getAvailability() {
        return this.availability;
    }
    setAvailability(availability) {
        this.availability = availability;
    }
}
class Patient {//patients class and their variables getters and setters
    constructor() {
        this.patientId;
        this.patientName;
        this.mobileNumber;
        this.age;
    }
    getPatinetId() {
        return this.patientId();
    }
    setPatientId(patientId) {
        this.patientId = patientId;
    }
    getPatientName() {
        return this.patientName;
    }
    setPatientName(patientName) {
        this.patientName = patientName;
    }
    getMobileNumber() {
        return this.mobileNumber;
    }
    setMobileNumber(mobilenumber) {
        this.mobileNumber = mobilenumber;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
class Appointment{//appointments class and their variables getters and setters
    constructor()
    {
        this.appointmentId;
        this.patientId;
        this.doctorId;
        this.appointmentDate;
    }
    getAppointmentId()
    {
        return this.appointmentId;
    }
    setAppointmentId(appointmentId)
    {
        this.appointmentId=appointmentId;
    }
    getPatientId()
    {
        return this.patientId=patientId
    }
    setPatientId(patientId)
    {
        this.patientId=patientId;
    }
    getDoctorId()
    {
        return this.doctorId;
    }
    setDoctorId(doctorId)
    {
        return this.doctorId=doctorId;
    }
    getAppoinmentDate()
    {
        return this.appointmentDate;
    }
    setAppointmentDate(date)
    {
        this.appointmentDate=date;
    }
}
module.exports = { Doctor ,Patient,Appointment};

