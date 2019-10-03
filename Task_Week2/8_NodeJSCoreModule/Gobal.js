globalFunction=()=>{
    console.log(_dirname); //It is a string. It specifies the name of the directory that currently contains the code. 
    console.log(_filename);//It specifies the filename of the code being executed. This is the resolved absolute path of this code file. The value inside a module is the path to that module file.
    console.log('Hello JavaTpoint'); //The console.log() function is used to display simple message on console.
    console.error(new Error('Hell! This is a wrong method.'));  //The console.error() function is used to render error message on console.
    const name = 'John';  
    console.warn(`Don't mess with me ${name}! Don't mess with me!`);  //The console.warn() function is used to display warning message on console.
}
module.exports=globalFunction();