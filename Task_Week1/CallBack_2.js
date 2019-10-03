/**************************************************************************************************************
 * @purpose :demonstrate callback function
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :26-08-2019
 * 
 **************************************************************************************************************/

 function addition(a,b,display)
 {
    let sum=a+b;
    console.log("addition is done");
    display(sum);
 }
 function display(result)
 {
     console.log(`Addition of two numbers :${result}`);
 }
 addition(50,90,display);


 Functional/Distance.js
