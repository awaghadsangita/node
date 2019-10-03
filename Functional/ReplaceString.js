/***************************************************************************************************
 * @purpose :check username is greater than 3 in length and print hello username,how are you
 * @Author	:sangita awaghad
 * @since	:23-08-2019
 *********************************************************************************************************/
const readInput = require('../Utility/Utility');

replaceString = () => {
    try {
        var givenString = "Hello <<UserName>>, How are you?";
        console.log("Enter User Name");
        var username = readInput.getString();

        if(typeof username!='string')throw "username should only be a string";
        
        console.log(givenString.replace("<<UserName>>", username));
        return username;
    } catch (e) {
        return e;
    }

}

module.exports = replaceString();