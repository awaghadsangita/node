/****************************************************************************************************
 * @purpose	:program to demonstrat callback.program read file in each callback and concat the result
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:01-08-2019
 * 
 **************************************************************************************************/

const fs = require('fs') // require the standard NodeJS fs module
 
const filePath1 = '../Files/filePath1.txt';
const filePath2 = '../Files/filePath2.txt';
const filePath3 = '../Files/filePath3.txt';
const filePath4 = '../Files/filePath4.txt';
const filePath5 = '../Files/filePath5.txt';
 
// helper function to concatenate results into a single string
const concatFiles = (...data) => {
  return data
    .map((res) => res.toString())
    .join('\n')
}
 
fs.readFile(filePath1, (err, data1) => {
  if (err) throw err
  fs.readFile(filePath2, (err, data2) => {
    if (err) throw err
    fs.readFile(filePath3, (err, data3) => {
      if (err) throw err
      fs.readFile(filePath4, (err, data4) => {
        if (err) throw err
        fs.readFile(filePath5, (err, data5) => {
          if (err) throw err
          console.log(
            concatFiles(data1, data2, data3, data4, data5)
          )
        });
      });
    });
  });
});