/***************************************************************************************************
 * @purpose	:read 2D arrays of integers, doubles, or booleans from keyboard input and printing them out to standard output.
 * @author	:sangita awaghad
 * @since	:23-08-2019
 ***************************************************************************************************/
const utility=require("..Utility/Utility/Utility");

twoDArray=()=>{

    console.log("Enter the number of rows and number column in Two D array");
    let row=utility.getInputNumber();
    let col=utility.getInputNumber();

    let twoDInteger=[[]];
    let twoDdouble=[[]];
    let twoDboolean=[[]];

    console.log(`enter ${row*col} Integer Numbers`);
    for(let i=0;i<row;i++)
    {
        twoDInteger[i]=[];
        for(let j=0;j<col;j++)
        {
            twoDInteger[i][j] = utility.getInputNumber();
        }
    }
    console.log(`enter ${row*col} Double Numbers`);
    for(let i=0;i<row;i++)
    {
        twoDdouble[i]=[];
        for(let j=0;j<col;j++)
        {
            twoDdouble[i][j] = utility.getFloatInput();
        }
    }
    
    console.log(`enter ${row*col} Boolean Values`);
    for(let i=0;i<row;i++)
    {
        twoDboolean[i]=[];
        for(let j=0;j<col;j++)
        {
            twoDboolean[i][j] = utility.getBooleanInput();
        }
    }
    console.log(`\nTwo D Integer Array`);
    console.log(twoDInteger);

    console.log(`\nTwo D Double Array`);
    console.log(twoDdouble);

    console.log(`\nTwo D Boolean Array`);
    console.log(twoDboolean);

}
module.exports=twoDArray();