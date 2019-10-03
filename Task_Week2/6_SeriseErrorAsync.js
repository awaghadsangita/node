/*************************************************************************************************
 * @purpose	:program to demonstrat asyn serise.with error
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
        callback('error', '1');
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
 * output:
    Program Start
    First Step -->
    [ '1' ]
    Program End
 */