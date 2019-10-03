/*****************************************************************************************************
 * @purpose	:find the number of different binary search trees that can be created using these nodes
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:31-08-2019
 * 
 *****************************************************************************************************/
const utility=require('../Utility/Utility');
const linkedlistUtility=require('../Utility/LinkedList');

binarySearchTree=()=>{
    console.log('How many nodes you want in tree');
    let nodeSize=utility.getInputNumber();
    
    for(let i=1;i<=nodeSize;i++)
    {
        let numberofPossibility= utility.getFactorial(2*i)/(utility.getFactorial(i+1)*utility.getFactorial(i));
        console.log(`for Node ${i} :possibilities ${numberofPossibility}`);
    }
}

module.exports=binarySearchTree();