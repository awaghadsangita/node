/*********************************************************************************************************
 * @purpose	:create a JSON file having inventory details for Rice, Pulses and Wheats with properties name,
 *           weight, price per kg.show inventory details with total value for every I=inventory
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-09-2019
 * 
 **********************************************************************************************************/
const utility=require('../../Utility/Utility');
const fs=require('fs');
inventoryManagement=()=>{
    const inventoryFileName='../../Files/inventor.json';
    let jsonString=fs.readFileSync(inventoryFileName);
    let jsonArray=JSON.parse(jsonString);
    let choice;
    do{
        console.log('*******************************************************************************************');
        console.log('1.Rices');
        console.log('2.Wheats');
        console.log('3.Pulses');
        console.log('4.Exit');
        process.stdout.write('which inventory data you want to see :');
        choice=utility.getInputNumber();//get choice for to display inventor details
        switch(choice)
        {
            case 1:
                {
                    console.log('------------------------------------------------------------------------------------------------------------');
                    console.log('\t\t\t\tRICE INVENTORY');
                    console.log('------------------------------------------------------------------------------------------------------------');
                    for(let i=0;i<jsonArray.rice.length;i++)//iterate rice inventory Json array
                    {
                        console.log(`Name : ${jsonArray.rice[i].name}`);
                        console.log(`Weight : ${jsonArray.rice[i].weight}`);
                        console.log(`Price : ${jsonArray.rice[i].price}`);
                        let totalvalue=jsonArray.rice[i].weight*jsonArray.rice[i].price;//calculate total value 
                        console.log(`\tTotal Value : ${totalvalue} `);
                        console.log('============================================================================')
                    }
                }
                break;
            case 2:    
                {
                    console.log('------------------------------------------------------------------------------------------------------------');
                    console.log('\t\t\t\tWHEATS INVENTORY');
                    console.log('------------------------------------------------------------------------------------------------------------');
                    for(let i=0;i<jsonArray.wheats.length;i++)//iterate wheat inventory Json array
                    {
                        console.log(`Name : ${jsonArray.wheats[i].name}`);
                        console.log(`Weight : ${jsonArray.wheats[i].weight}`);
                        console.log(`Price : ${jsonArray.wheats[i].price}`);
                        let totalvalue=jsonArray.wheats[i].weight*jsonArray.wheats[i].price;//calculate total value 
                        console.log(`\tTotal Value : ${totalvalue} `);
                        console.log('============================================================================')
                    }
                }
                break;
            case 3:   
                {
                    console.log('------------------------------------------------------------------------------------------------------------');
                    console.log('\t\t\t\tPULSES INVENTORY');
                    console.log('------------------------------------------------------------------------------------------------------------');
                    for(let i=0;i<jsonArray.pulses.length;i++)//iterate pulse inventory Json array
                    {
                        console.log(`Name : ${jsonArray.pulses[i].name}`);
                        console.log(`Weight : ${jsonArray.pulses[i].weight}`);
                        console.log(`Price : ${jsonArray.pulses[i].price}`);
                        let totalvalue=jsonArray.pulses[i].weight*jsonArray.pulses[i].price;//calculate total value 
                        console.log(`\tTotal Value : ${totalvalue} `);
                        console.log('*******************************************************************')
                    }
                }
                break; 
            case 4:
                    process.exit();
        }
    }while(choice!=4);
}

module.exports=inventoryManagement();