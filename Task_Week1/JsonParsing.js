/**************************************************************************************************************
 * @purpose :json read and write operation
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :25-08-2019
 * 
 **************************************************************************************************************/
const utility=require("../Utility/Utility");
const fs=require('fs');
let jsonData;
let jsonParse=[];
let data=fs.readFileSync('person.json')
jsonData=data;
jsonParse=JSON.parse(jsonData);
for(let i=0;i<jsonParse.person.length;i++)
{
    console.log(`********************`);
    console.log(`Name : ${jsonParse.person[i].name}`);
    console.log(`City : ${jsonParse.person[i].city}`);
    console.log(`Mobile : ${jsonParse.person[i].mobile}`);
}


console.log("Enter the name");
let name=utility.getString();

console.log("Enter the city");
let city=utility.getString();

console.log("Enter the Mobile Number");
let mobilenumber=utility.getInputNumber();

let data1={"name":name,"city":city,"mobile":mobilenumber};
jsonParse.person.push(data1);

let jsonContent=JSON.stringify(jsonParse);
fs.writeFileSync('person.json',jsonContent);
console.log("json object added successfully");