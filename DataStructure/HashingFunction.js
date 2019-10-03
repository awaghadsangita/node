/*************************************************************************************************
 * @purpose	:create a slot of 10 to store Chain of numbers that belong to each slot to efficiently
 * 			 search a number from a given set of number
 * 
 * @auther	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility = require('../Utility/Utility');
const linkedList = require('../Utility/LinkedList');
const fs = require('fs');
hashingFunction=()=>
{
    try {
        let listObj = [];
        for (let i = 0; i < 11; i++) {
            listObj[i] = new linkedList.LinkList();//creating 11 object of linklist
        }
       
        let fileName = '../Files/hashing.txt';
        let choice;
        let dataString = fs.readFileSync(fileName);//read file 
        let dataArray = dataString.toString().split(',');
        
        if(dataArray.length-1!=0)
        {
        for (let i = 0; i < dataArray.length - 1; i++) {
            let slot = dataArray[i] % 11;
            if(dataArray[i]!='undefined')
            {
                let node = new linkedList.Node(dataArray[i], null)
                let tc1=listObj[slot].insertAtEnd(node);//call insert at end method of linked list
                if(tc1!='success')
                {
                    throw tc1;
                }
            }
        }
        do {
            for(let i=0;i<listObj.length;i++)
            {
                process.stdout.write(`solt ${i}:`)
                listObj[i].display();
                console.log();
            }
            console.log('Enter Element To Search');
            let elementToSearch = utility.getInputNumber();
            let slot = elementToSearch % 11;
            let isFound = listObj[slot].index(elementToSearch);
            if (isFound == -1)//if element not found in link list insert element in linked list
            {
                console.log(`${elementToSearch} is NOT Found`);
                let node = new linkedList.Node(elementToSearch, null)
                let tc2=listObj[slot].insertAtEnd(node);//call insert at end method of linked list
                if(tc2!='success')
                {
                    throw tc2;
                }
            }
            else//if element found in link list remove element from linked list
            {
                console.log(`${elementToSearch} is Found in Slot ${slot} at Position ${isFound}`);
                let tc3=listObj[slot].deleteAt(isFound);//call remove at specific position method of linked list
                if(tc3!='success')
                {
                    throw tc3;
                }
            }
            for(let i=0;i<listObj.length;i++)
            {
                process.stdout.write(`solt ${i}:`)
                listObj[i].display();
                console.log();
            }
            process.stdout.write(`\ndo you want perform more search if yes press 'y' otherwise press 'n'`);
            choice = utility.getString();
        } while (choice != 'n');
        let content = "";
        let wholeContent="";
        for(let i=0;i<listObj.length;i++)
        {
            content=content+listObj[i].getString();
        }
        fs.writeFileSync(fileName, content);//write linked list node into string
        console.log();
    }
    else
    {
        throw 'file is empty';
    }
    } catch (e) {
        console.log(e);
        return e;
    }
}
module.exports=hashingFunction();