/*************************************************************************************************
 * @purpose	:program to demonstrat asyn parallel
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:01-08-2019
 * 
 **************************************************************************************************/

const async = require('async');
async.parallel([
    function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 100);
    }
  ],
  function(err, results) {
    console.log(results);
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  });