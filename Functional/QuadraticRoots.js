/**************************************************************************************************
 * @purpose	:find roots of the quadratic equation 
 * @author	:sangita awaghad
 * @since	:23-08-2019
 ***************************************************************************************************/
const utility = require("../Utility/Utility");
quadratic = () => {
    try {
        console.log("Enter value for a,b,c (ax^2+bx+c=0) quadratic equation");
        let a = utility.getInputNumber();
        let b = utility.getInputNumber();
        let c = utility.getInputNumber();
        let roots;
        if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number')
                throw 'ax^2+bx+c=0 in this equation value a,b and c should not be string';

        if (a== 0) {
            throw 'ax^2+bx+c=0 in this equation a should not be zero';
        }

        roots = utility.findRoots(a, b, c);
        console.log(roots["result"]["quote"]);
        console.log(`First Root :${roots["result"]["firstroot"]}`);
        console.log(`Second Root :${roots["result"]["secondroot"]}`);
        //https://www.emathzone.com/tutorials/algebra/the-discriminant-and-complex-roots.html

    } catch (e) {
        console.log(`error occured :${e}`);
        return e;
    }
}
module.exports = quadratic();