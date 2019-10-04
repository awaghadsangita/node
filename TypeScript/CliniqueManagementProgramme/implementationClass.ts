/*********************************************************************************************************
 * @purpose	:contain all methods required for cliniq management
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-10-2019
 * 
 **********************************************************************************************************/
import * as fs from 'fs';
import * as moment from 'moment';

class ImplementationClass{
    private doctorArray=new Array();
    private patientArray=new Array();
    private appointmentArray=new Array();
    readDoctorJsonFile()
    {
        try{
            let doctorjsonFilename='./doctor.json'
            let jsonString=fs.readFileSync(doctorjsonFilename);
            this.doctorArray=JSON.parse(jsonString.toString());
            
        }catch(e)
        {
            return e;
        }
    }
    readPatientJsonFile()
    {
        try{
            let patientjsonFilename='./patient.json';
            let jsonString=fs.readFileSync(patientjsonFilename);
            this.patientArray=JSON.parse(jsonString.toString());
        }catch(e)
        {
            return e;
        }
    }
    readAppoinentmentJsonfile()
    {
        try{
            let appointmentjsonFilename='./appointment.json';
            let jsonString=fs.readFileSync(appointmentjsonFilename);
            this.appointmentArray=JSON.parse(jsonString.toString());
        }catch(e)
        {
            return e;
        }
    }
    findAppointmentDate(arrayindex:number):any{
        try{
            let date = moment(new Date()).format('DD-MM-YYYY');  
            let appointmentDate= moment(new Date()).format('DD-MM-YYYY'); ;
            let count:number=0;
            let daycount=1;
            for(let i=0;i<this.appointmentArray.length;i++)
            {
                if(this.doctorArray[arrayindex]['doctorid']==this.appointmentArray[i]['doctorid'])
                {
                    count++;
                }
                if(count==5)
                {
                    date=moment(new Date()).add(daycount++, 'day').format('DD-MM-YYYY');
                    count=0;
                }
                appointmentDate=date;
            }
            return appointmentDate;
        }catch(e)
        {
            return e;
        }
    }
    getDoctorById(did:number):any
    {
        try{
            let index=-1;
            let arrayIndex=[];
            for(let i=0;i<this.doctorArray.length;i++)
            {
                if(this.doctorArray[i]['doctorid']==did)
                {
                    index=i;
                    arrayIndex.push(i);
                }
            }
            if(index==-1)
            {
                return arrayIndex[0]=-1;
            }else
            {
                return arrayIndex;
            }
        }catch(e)
        {
            return e;
        }
    }
    getDoctorByName(name:string):any
    {
        try{
            let index=-1;
            let arrIndex=[];
            for(let i=0;i<this.doctorArray.length;i++)
            {
                if(this.doctorArray[i]['doctorname']==name)
                {
                    index=i;
                    arrIndex.push(i);
                }
            }
            if(index==-1)
            {
                return arrIndex.push(-1);
            }
            else
            {
                return arrIndex;
            }
        }catch(e)
        {
            return e;
        }
    }
    getDoctorBySpecializtion(specialization:string):any{
        try{
            let isFound=-1;
            let arrIndex=[];
            let re = new RegExp(specialization.toLocaleLowerCase(),"gi");
            // specialization.toLocaleLowerCase()
            for(let i=0;i<this.doctorArray.length;i++)
            {
                if(this.doctorArray[i]['specialization'].toLocaleLowerCase().search(specialization.toLocaleLowerCase())!= -1)
                {
                    isFound=i;
                    arrIndex.push(i);
                }
            }
            if(isFound==-1)
            {
                return arrIndex[0]=-1;
            }
            if(isFound>-1)
            return arrIndex;
        }catch(e)
        {
            return e;
        }
    }
    getDoctorByAvailability(availability:string):any{
        try{
            let index=-1;
            let arrayIndex=new Array();
            for(let i=0;i<this.doctorArray.length;i++)
            {
                if(this.doctorArray[i]['availability'].localeCompare(availability)===0)
                {
                    index=i;
                    arrayIndex.push(i);
                }
            }
            if(index==-1)
            {
                return arrayIndex.push(-1);
            }
            else
            {
                return arrayIndex;
            }
        }catch(e)
        {
            return e;
        }
    }
    showDoctorDetails(index:number[])
    {       console.log('*******************DOCTOR DETAILS*******************')
        for(let i=0;i<index.length;i++){
            console.log('Doctor Id :',this.doctorArray[index[i]]['doctorid']);
            console.log('Doctor Name :',this.doctorArray[index[i]]['doctorname'].toLocaleLowerCase());
            console.log('Specilization :',this.doctorArray[index[i]]['specialization'].toLocaleLowerCase());
            console.log('Availability :',this.doctorArray[index[i]]['availability'].toLocaleLowerCase());
            console.log('****************************************************')
        }
    }
    
    getPatientById(id:number):any{
        try{
            
            let index:number=-1;
            let arrayIndex=new Array();
            for(let i=0;i<this.patientArray.length;i++)
            {
                if(this.patientArray[i]['patientid']===id)
                {
                    index=i;
                    arrayIndex.push(i);
                }
            }
            // if(index===-1)
            // { console.log('HHHHHHHHHHHiii')
            //     return arrayIndex.push(-1);
            // }
           
            return arrayIndex;
          
        }catch(e)
        {
            return e;
        }
    }
    getPatientByName(name:string):any{
        try{
            let index=-1;
            let arrayIndex=[];
            for(let i=0;i<this.patientArray.length;i++)
            {
                if(this.patientArray[i]['patientname']==name)
                {
                    index=i;
                    arrayIndex.push(i);
                }
            }
            if(index==-1)
            {
                return arrayIndex.push(-1);
            }
            else
            {
                return arrayIndex;
            }
        }catch(e)
        {
            return e;
        }
    }
    getPatientByMobileNumber(ph:number):any{
        try{
            let index=-1;
            let arrayIndex=[];
            for(let i=0;i<this.patientArray.length;i++)
            {
                if(this.patientArray[i]['mobilenumber']==ph)
                {
                    index=i;
                    arrayIndex.push(i);
                }
            }
            if(index==-1)
            {
                return arrayIndex.push(-1);
            }
            else
            {
                return arrayIndex;
            }
        }catch(e)
        {
            return e;
        }
    }
    showPatientDetails(index:number[])
    {       console.log('*******************PATIENT DETAILS*******************')
        for(let i=0;i<index.length;i++){
            console.log('Patient Id :',this.patientArray[index[i]]['patientid']);
            console.log('Patient Name :',this.patientArray[index[i]]['patientname'].toLocaleLowerCase());
            console.log('Age :',this.patientArray[index[i]]['age']);
            console.log('Mobile Number :',this.patientArray[index[i]]['mobilenumber']);
            console.log('****************************************************')
        }
    }
    scheduleAppointment(arrayindex:number,date:string,pid:number)
    {
        try{
            
            let id=this.appointmentArray[this.appointmentArray.length-1]['appointmentid']+1;
            let object={"appointmentid":id,"patientid":pid,"doctorid":this.doctorArray[arrayindex]['doctorid'],"date":date}
            this.appointmentArray.push(object);
            for(let i=0;i<this.appointmentArray.length;i++)
            {
                console.log(this.appointmentArray[i]['appointmentid']);
            }  
            this.saveToAppointmentJsonFile(this.appointmentArray);
        }catch(e)
        {0
            return e;
        }
    }
    saveToAppointmentJsonFile(arr:any[]){
        try{
            let jsonString = JSON.stringify(arr);
            fs.writeFileSync('./appointment.json', jsonString);
            this.readAppoinentmentJsonfile();
        }catch(e)
        {
            return e;
        }
    }
    addPatient(name:string,age:number,ph:number){
        try{
            let id=this.patientArray[this.patientArray.length-1]['patientid']+1;
            let obj={"patientid":id,"patientname":name,"age":age,"mobilenumber":ph};
            this.patientArray.push(obj);
            this.saveToPatientJsonFile();
        }catch(e)
        {
            return e;
        }
    }
    saveToPatientJsonFile()
    {
        try{
            let jsonString = JSON.stringify(this.patientArray);
            fs.writeFileSync('./patient.json', jsonString);
            this.readPatientJsonFile();
        }catch(e)
        {
            return e;
        }
    }
    findPopularDoctor()
    {
        try{
            let count:number=0;
            let list=[{'doctorid':0,'count':0}];
            for(let i=0;i<this.doctorArray.length;i++)
            {
                for(let j=0;j<this.appointmentArray.length;j++)
                {
                    if(this.appointmentArray[j]['doctorid']==this.doctorArray[i]['doctorid'])
                    {
                        count++;
                    }
                }
                list.push({'doctorid':this.doctorArray[i]['doctorid'],'count':count});
            }
            let MAX=0;
            let obj={'doctorid':0,'count':0};
            for(let i=0;i<list.length;i++)
            {
                if(MAX<list[i]['count'])
                {
                    obj=list[i];
                    MAX=list[i]['count'];
                }
            }
            console.log('**********************POPULAR DOCTOR**********************');
            for(let i=0;i<this.doctorArray.length;i++)
            {
                if(this.doctorArray[i]['doctorid']==obj['doctorid'])
                {
                    console.log('Doctor Id :',this.doctorArray[i]['doctorid']);
                    console.log('Doctor Name :',this.doctorArray[i]['doctorname'].toLocaleLowerCase())
                    console.log('Specilization :',this.doctorArray[i]['specialization'].toLocaleLowerCase());
                    console.log('Availability :',this.doctorArray[i]['availability'].toLocaleLowerCase());
                    console.log('******************************************************');
                }
            }

        }catch(e)
        {
            return e;
        }
    }
}
export{ImplementationClass};