/*************************************************************************************************
 * @purpose	:program to demonstrat async waterfall
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:01-08-2019
 * 
 **************************************************************************************************/
var async = require('async');
async.waterfall([
    function (callback) {
        console.log('First Step --> ');
        callback('error', '1', '2');
    },
    function (arg1, arg2, callback) {
        console.log('Second Step --> ' + arg1 + ' ' + arg2);
        callback(null, '3');
    },
    function (arg1, callback) {
        console.log('Third Step --> ' + arg1);
        callback(null, 'final result');
    }
], function (err, result) {
    console.log('Main Callback --> ' + result);
});

console.log('Program End');

/**
 * output:  First Step -->
            Main Callback --> 1
            Program End
 */