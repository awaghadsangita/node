
/*****************************************************************************************************
 * @purpose	:Simulates a gambler who start with $stake and place fair $1 bets until
 * 			he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
 * 			times he/she wins and the number of bets he/she makes. Run the experiment N
 * 			times, averages the results, and prints them out.
 * @Author	:sangita awaghad
 * @since	:23-08-2019
 *****************************************************************************************************/
const utility = require("./Utility/Utility");

gambler = () => {
    console.log("enter $stake amount");
    let stake = utility.getInputNumber();
    console.log("enter $goal amount");
    let goal = utility.getInputNumber();
    console.log("how many times you want to play");
    let bets = utility.getInputNumber();

    let results = utility.gamblerGame(stake, goal, bets);//call method containing actual logic
    
    console.log(results);
    
    let winPercentage = parseInt(results["winCount"]) * 100 / parseInt(results["bets"]);
    let loosPercentage = 100 - winPercentage.toFixed(2);

    console.log(`Win Percentage :${winPercentage}`);
    console.log(`loose Percentage :${loosPercentage}`);
    
    if (results["isWin"]) {
        if (results["isAchiveGoal"]) {
            console.log("user win and achieve goal");
        }
        else {
            console.log("user win BUT NOT achieve goal");
        }
    }
    else {
        console.log("user loose game");
    }
}

module.exports = gambler();