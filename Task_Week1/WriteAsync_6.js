/**************************************************************************************************************
 * @purpose :demonstrate ayschronus write and append operation
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :25-08-2019
 * 
 **************************************************************************************************************/
const utility=require('../Utility/Utility');
const fs=require('fs');
let filename='text.txt';

console.log("Enter data to write in file");
let asynContent=utility.getString();

 fs.writeFile(filename,asynContent,function(err){
    if(err)
    console.log(err);
    else
    console.log("write operatiion complete");
});

fs.appendFile('appendText.txt',' '+asynContent,function(err){
    if(err)
    console.log(err);
    else
    console.log(`asynchrous append operation complete`);
});
    