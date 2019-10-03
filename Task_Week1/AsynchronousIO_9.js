/**************************************************************************************************************
 * @purpose :demonstrate non blocking I/O
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :25-08-2019
 * 
 **************************************************************************************************************/
const fs=require('fs');
console.log("Execution started");
fs.readFile('text.txt',function(err,data){
    if(err)
    {
        return console.error(err);;
    }
    console.log(data.toString());
});
console.log("Execution end");