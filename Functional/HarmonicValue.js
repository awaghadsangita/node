/******************************************************************************************************
 * @purpose	:prints the Nth harmonic number serise : 1/1 + 1/2 + ... + 1/N and harmonic value
 * @author	:sangita awaghad
 * @since	:23-08-2019
 ******************************************************************************************************/
const utility=require("../Utility/Utility");

HarmonicNumber=()=>{
    console.log("Enter the Harmonic Value (N) :");
    var n=utility.getInputNumber();//return input value from keyboard
    var harmonicValue=0;
    var harmonicSerise="";
    for(let i=1;i<=n;i++)
    {
        harmonicSerise=harmonicSerise+" 1/"+i;
        harmonicValue=harmonicValue+1/i;
        if(i!=n)
        harmonicSerise+=" +";
    }
    console.log(`Harmonic Serise :${harmonicSerise} = ${harmonicValue.toFixed(2)}`);
}

module.exports=HarmonicNumber();