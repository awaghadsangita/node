/*************************************************************************************************
 * @purpose	:checking equation has opening parentheses and same closing parentheses
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility = require('../Utility/Utility');
const stacks = require('../Utility/Stack');
balancedParentheses=()=>
{
    try {
        let stackObj = new stacks.Stack();
        let wantToContinue;
        let isMatched;
        do {
            console.log('enter the expression :');
            let expression = utility.getNextLine();
            let expressionArray = expression.split('');

            for (let i = 0; i < expressionArray.length; i++) {
                if (expressionArray[i] == '(' || expressionArray[i] == '{' || expressionArray == '['|| expressionArray == '<') {
                    let tc1=stackObj.push(expressionArray[i]);
                    console.log(tc1);
                    if(tc1=='data to be pushed should not be undefined'||tc1=='stack overflow')
                    {
                        throw tc1;
                    }
                }
            }
            
            isMatched = true;
            for (let i = 0; i < expressionArray.length; i++) {
                if (expressionArray[i] == ')' || expressionArray[i] == '}' || expressionArray[i] == ']' || expressionArray[i] == '>') {
                    let popedItem = stackObj.pop();//poping item from stack when closing bracket find
                    console.log(popedItem);
                    if(popedItem=='you should not remove from empty stack')
                    {
                        throw popedItem;
                    }
                    if (expressionArray[i] == ')' && popedItem != '(' || expressionArray[i] == '}' && popedItem != '{' || expressionArray[i] == ']' && popedItem != '[' || expressionArray[i] == '>' && popedItem != '<') {  //execute if blook when we dont get respective closing bracket
                        isMatched = false;
                        break;
                    }
                }
            }
            if (isMatched == false||!stackObj.isEmpty()) {
                console.log(`${expression} has NOT have balancedParentheses`);
            }
            else {
                console.log(`${expression} have balancedParentheses`);
            }
            console.log('do you want check one more expression(yes/no)')
            wantToContinue = utility.getString();

        } while (wantToContinue != 'no');
    } catch (e) {
        console.log(`Error Occured :${e}`);
    }
}

module.exports = balancedParentheses();