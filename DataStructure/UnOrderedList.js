/*************************************************************************************************
 * @purpose	:read the text from a file, split it into words and arrange it as linked List. take a user input to search a Word in the List. If the Word is not found then add it 
 *           to the list, and if it found then remove the word from the List. In the end save the list into a file
 *  
 * @auther	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility = require('../Utility/Utility');
const fs = require('fs');
const linkedlistUtility = require('../Utility/LinkedList');
unOrderedList=()=> {
    try {
        let listObj = new linkedlistUtility.LinkList();
        let choice;
        let filename = '../Files/unorderedList.txt'

        let dataString = fs.readFileSync(filename);//read text file synchronously
        let dataArray = dataString.toString().split(',');//split data string into array
        console.log(dataArray);

        for (let i = 0; i < dataArray.length - 1; i++) {
            let regex = /^[a-zA-Z0-9]{1,}$/;
            if (regex.test(dataArray[i])) {
                let node = new linkedlistUtility.Node(dataArray[i], null);
                let tc1 = listObj.insertAtEnd(node);//call insert node at end of list
                if (tc1 == 'linked list node data should not contain special symbol' || tc1 == 'linked list data should not be undefined') {
                    throw tc1;
                }
            }
        }
        do {
            console.log("\nList of Elements in file")
            let tc2 = listObj.display();//call display of linked list
            if (tc2 == 'list should not be empty') {
                throw tc2;
            }

            console.log("\nEnter the word to search in file");
            let word = utility.getString();//getting user input to search in list

            let position = listObj.index(word)//find position of searchword in list
            if (position == -1) {//if searchword not found then insert at end of link list
                console.log(`\n${word} NOT Found in the list`);
                let node = new linkedlistUtility.Node(word, null);//creating object of node 
                let tc1 = listObj.insertAtEnd(node);//insert node at end of linked list
                if (tc1 == 'linked list node data should not contain special symbol' || tc1 == 'linked list data should not be undefined') {
                    throw tc1;
                }
            }
            else {//if searchword found in list remove it from list
                console.log(`\n${word} IS Found in the list at position ${position}`);
                let tc2=listObj.deleteAt(position);//call delete at specific method to delete node from linked ;ist
                if (tc2 == 'you should not delete node from empty linked list'||tc2=='you should not delete zeroth position node') {
                    throw tc2;
                }
            }
            let tc3=listObj.display();//call display method of linked list
            if (tc3 == 'list should not be empty') {
                throw tc3;
            }
        
        console.log('\n\ndo you want to continue(yes/no)');//asked user to perfrom serach one more time
        choice = utility.getString();
        } while (choice != 'no');
        let content = listObj.getString();//return node data as string
        fs.writeFileSync(filename, content);//call write method of fs module to write content into file
        console.log("file write successfully");

    } catch (e) {
        console.log(`Error Occured :${e}`);
    }
}
module.exports=unOrderedList();