/****************************************************************************************************
 * @purpose	:read list of word from file and search word using Binary Search;
 * 
 * @author	:sangita awaghad
 * @version :1.0
 * @since	:24-08-2019
 * 
 ***************************************************************************************************/
const utility = require("../Utility/Utility");
const fs = require('fs');
binarySearch = () => {
    try {
        let path = "/home/admin1/nodeProject/binarySearchWord.txt";
        let data = fs.readFileSync(path);   //read file return string

        let data1 = data.toString().split(',');//split string by comma and 

        console.log(data1);
        console.log(`enter string to search`);
        let searchString = utility.getString();

        data1 = utility.insertionSort(data1);     //sort list words using insertion sort

        let isFound = utility.binarySearch(data1, searchString)//call binary search method

        if (isFound == -1) {                    //execute if element is not found in list
            console.log(`${searchString} is NOT found`);
        }
        else {
            console.log(`${searchString} is  found`);
        }
    } catch (e) {
        console.log(`Error Occured :${e}`);
        return e;
    }
}
module.exports = binarySearch();