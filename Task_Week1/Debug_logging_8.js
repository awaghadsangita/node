/**************************************************************************************************************
 * @purpose :demonstrate console logging and debugging
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :26-08-2019
 * 
 **************************************************************************************************************/
const fs=require('fs');
 try{
let name="sangita";
let city="aurangabad";
let mobile=[9422329006,9011907937];
//console.log() method is used to print to stdout with newline
console.log(`Name :${name}\nCity :${city}\nMobile :${mobile}`);
//console.info() method is same as console.log()
console.info(`Name :${name}\nCity :${city}\nMobile :${mobile}`);
let data=fs.readFileSync('dat.txt');//dat.txt file does not exist
console.log(data.toString());



}catch(e)
{
    // console.error(`error occured :${e}`);
    // The console.error() method works the same as console.log, except 
    // that the output is sent to stderr instead of stdout. As stderr is 
    // always written to synchronously, therefore in node.js any use of console.error,
    // will block your process until the output has all been written. 
    // The method is useful for error messages, but excessive use could slow down your process
    console.warn(`error occured :${e}`);
}