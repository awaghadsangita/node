/*************************************************************************************************
 * @purpose	:find prime number and then find anagram then store them in stack which is implemented using
 *          queue; 
 *  
 * @auther	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility = require('../Utility/Utility');
const linkedList = require('../Utility/LinkedList');
findPrimeAnagramStack=()=> {

    let listObj = new linkedList.LinkList();
    let node;
    let primeArray = utility.getPrimeNumber(0, 1000);//return array of prime numbers between 0 to 1000

    console.log("*********Prime Array*******")
    for (let i = 0; i < 200; i++) {
        if (typeof primeArray[i] != 'undefined')
            process.stdout.write(`${primeArray[i]} `);
    }
    let anagramArray = utility.getOnlyAnagram(primeArray);//return array of anagram number which are prime
    anagramArray.sort((a, b) => a - b);//sort array of anagrams

    for (let i = 0; i < anagramArray.length; i++) {
        node = new linkedList.Node(anagramArray[i], null);//create node object
        let tc1=listObj.insertFirst(node);//call insert at end method of linked list
        if(tc1!='success')
        {
            throw tc1;
        }
    }

    console.log("\n\n*********Anagram in reverse order*********");
    let head = listObj.HEAD;//get head of linked list
    let start = 1000;
    let end = 900;
    process.stdout.write(`${start}-${end} :`);
    while (head.next != null) {
        let data = head.data;//get data from node of linked list
        if (data < end) {
            console.log();
            start = start - 100;
            end = end - 100;
            process.stdout.write(`${start}-${end} :`);
        }
        process.stdout.write(`${data} `);
        head = head.next;//iterate linked list still last node
    }
    console.log();
}
module.exports = findPrimeAnagramStack();