/*****************************************************************************************************
 * @purpose	: calculate distance from origin
 * 
 * @author	:sangita awaghad
 * @since	:23-08-2019
 * 
 *****************************************************************************************************/

const utility = require('../Utility/Utility');
distance = () => {
    try {
        console.log('Enter value for x coordinate and for y coordinate');
        //take x and y coordinate from command line
        let x = utility.getFloatInput();
        let y = utility.getFloatInput();
        if (typeof x == 'string' || typeof y == 'string')
            throw 'value of x and value of y should not be string';

        //call method to calcualte distance from (0,0) to(x,y)
        let dist = utility.calculateDistance(x, y);

        console.log(`Distance from origin(0,0) to (${x},${y}) : ${dist["result"]}`);

    } catch (e) {
        console.log(`error occured :${e}`);
        return e;
    }
}

module.exports = distance();