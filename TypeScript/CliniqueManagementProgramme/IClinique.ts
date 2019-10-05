export interface IClinique{
    readDoctorJsonFile():any;
    readPatientJsonFile():any;
    readAppoinentmentJsonfile():any;
    findAppointmentDate(arrayindex: number): any;
    getDoctorById(did: number): any ;
    getDoctorByName(name: string): any;
    getDoctorBySpecializtion(specialization: string): any;
    getDoctorByAvailability(availability: string): any ;
    showDoctorDetails(index: number[]):any;
    getPatientById(id: number): any;
    getPatientByName(name: string): any;
    getPatientByMobileNumber(ph: number): any;
    showPatientDetails(index: number[]):any;
    scheduleAppointment(arrayindex: number, date: string, pid: number):any;
    saveToAppointmentJsonFile(arr: any[]):any;
    addPatient(name: string, age: number, ph: number):any;
    saveToPatientJsonFile():any;
    findPopularDoctor():any
}