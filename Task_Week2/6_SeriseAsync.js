/*************************************************************************************************
 * @purpose	:program to demonstrat async serise
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:01-08-2019
 * 
 **************************************************************************************************/
console.log('Program Start');

var async = require('async');
async.series([
    function (callback) {
        console.log('First Step --> ');
        callback(null, '1');
    },
    function (callback) {
        console.log('Second Step --> ');
        callback(null, '2');
    }
],
function (err, result) {
    console.log(result);
});

console.log('Program End');
/**
 * Series In Series, we pass array of functions to async.series(). 
 * All the functions are executed in series and the consolidated outputs 
 * of each function is passed to the final callback. 
 * In case if any error is passed to the function’s callback, 
 * then main callback function will be invoked by skipping rest of functions in the queue.
 */
/**
 * output:
 * Program Start
    First Step -->
    Second Step -->
    [ '1', '2' ]
Program End
 */