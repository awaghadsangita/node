/**************************************************************************************************************
 * @purpose :demonstrate synchronus file read and write operation
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :25-08-2019
 * 
 **************************************************************************************************************/
const utility=require('../Utility/Utility');
const fs=require('fs');

let innerChoice;
let filename='text.txt';
do{
    console.log('***********Synchronous Operation*************');
    console.log('1.Read File\n2.Write file\n3.Exit\nEnter your choice');
    innerChoice=utility.getInputNumber();
    switch(innerChoice)
   {
    case 1:let data=fs.readFileSync(filename);
            console.log('Synchronus Read Opereation\n\n'+data.toString());
            console.log('synchronus read operation end');
            break;
    case 2:console.log('Enter data to write in file');
            let content=utility.getString();
            //fs.writeFileSync('text.txt',data);
            fs.appendFileSync(filename,' '+content);
            console.log('data is appended successfully synchrously');
            break;
    case 3:console.log('exiting...');
    default:console.log('Enter the proper choice');
    }
}while(innerChoice!=3);
