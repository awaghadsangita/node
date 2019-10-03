/*************************************************************************************************
 * @purpose	:read .a list of numbers from a file and arrange it ascending order in a linked list. 
 *          take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * 
 * @auther	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility = require('../Utility/Utility');
const fs = require('fs');
const linkedlistUtility = require('../Utility/LinkedList');

orderedList=()=> {
    try {
        let listObj = new linkedlistUtility.LinkList();//create object linked list class
        let choice;
        let filename = '../Files/orderedList.txt'
        let dataString = fs.readFileSync(filename);//read file
        let dataArray = dataString.toString().split(',');//split dataString into array
        console.log(dataArray);

        for (let i = 0; i < dataArray.length - 1; i++) {
            let node = new linkedlistUtility.Node(dataArray[i], null);//create object of node class
            let result = listObj.insertAtEnd(node);//insert node at end of linked list
            if (result == 'linked list node data should not contain special symbol' || result == 'linked list data should not be undefined') {
                throw result;
            }
        }
        do {

            console.log("List of elements in file")
            let tc1 = listObj.display();//call display method of linked list
            if (tc1 == 'list should not be empty') {
                throw tc1;
            }
            listObj.sortList();//call sort method to sort linked list node

            console.log("\nList of elements after sorting linked list")
            let tc2 = listObj.display();//call display method of linked list
            if (tc2 == 'list should not be empty') {
                throw tc2;
            }
            console.log("\nEnter the number to search in file");
            let number = utility.getInputNumber();//get the user input to serach number in linked list

            let position = listObj.index(number)//get position of serach number in a linked list
            if (position == -1) {//if serach number not found insert it into sorted array
                console.log(`${number} NOT Found in the list`);
                let node = new linkedlistUtility.Node(number, null);
                listObj.insertToSortedList(node);
            }
            else {//if serach number found in linked list delete it from linked list
                console.log(`${number} IS Found in the list at position ${position}`);
                let tc3 = listObj.deleteAt(position);
                if (tc3 == 'you should not delete node from empty linked list' || tc3 == 'you should not delete zeroth position node' || tc3 == 'you should not delete node greater than size of linked list') {
                    throw tc3;
                }
            }
            let tc4 = listObj.display();//call display method of linked list
            if (tc4 == 'list should not be empty') {
                throw tc4;
            }
            console.log('\n\ndo you want to continue(yes/no)');
            choice = utility.getString();

        } while (choice != 'no');

        let content = listObj.getString();//get data from linked list in a string as comma separted list of number 
        if (content == 'you should not concat node data from empty linked list') {
            throw content;
        }
        fs.writeFileSync(filename, content);//write content into file
        console.log("\nfile write successfully");
    } catch (e) {
        console.log(`Error Occured ${e}`);
    }
}
module.exports=orderedList()