class Doctor{
    private doctorid:number;
    private doctorname:string;
    private specialization:string;
    private availability:string;
    constructor()
    {
        this.doctorid=0;
        this.doctorname='';
        this.specialization='';
        this.availability='';
    }
    get getDoctorid():number{
        return this.doctorid;
    }
    set setDoctorid(id:number){
        this.doctorid=id;
    }
    get getDoctorName():string{
        return this.doctorname;
    }
    set setDoctorName(name:string){
        this.doctorname=name;
    }
    get getSpecialization():string{
        return this.specialization;
    }
    set setSpecialization(specialization:string){
        this.specialization=specialization;
    }
    get getAvailability():string{
        return this.availability;
    }
    set setAvailability(shift:string)
    {
        this.availability=shift;
    }
}

class Patient{
    private patientid:number;
    private patientname:string;
    private age:number;
    private mobilenumber:number;

    constructor()
    {
        this.patientid=0;
        this.patientname='';
        this.age=0;
        this.mobilenumber=0;
    }
    get getPatientid():number{
        return this.patientid;
    }
    set setPatientid(id:number){
        this.patientid=id;
    }
    get getPatientname():string{
        return this.patientname;
    }
    set setPatientname(name:string)
    {
        this.patientname=name;
    }
    get getAge():number{
        return this.age;
    }
    set setAge(age:number){
        this.age=age;
    }
    get getMobilenumber():number{
        return this.mobilenumber;
    }
    set setMobilenumber(ph:number)
    {
        this.mobilenumber=ph;
    }
}
class Appoinetment{
    private appointmentid:number;
    private patientid:number;
    private doctorid:number;
    private date:string;
    constructor()
    {
        this.appointmentid=0;
        this.patientid=0;
        this.doctorid=0;
        this.date="";
    }

}
exports={Patient,Doctor,Appoinetment}