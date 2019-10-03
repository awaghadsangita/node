const utility = require("../Utility/Utility");
TicTacToe = () => {
    let board = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    let countX = { "count1": 0, "count2": 0, "count3": 0, "count4": 0, "count5": 0, "count6": 0, "count7": 0, "count8": 0 };
    let countO = { "count1": 0, "count2": 0, "count3": 0, "count4": 0, "count5": 0, "count6": 0, "count7": 0, "count8": 0 };
    let count = 0;
    var win1 = [];
    let checkPossiblity = { "board": board, "countX": countX, "countO": countO };


    do {
        if (count == 9) {
            break;
        }
        
        console.log("User Turn");
        checkPossiblity = utility.userTurn(checkPossiblity);
        count++;
        win1 = utility.checkWinner(checkPossiblity);
        utility.displayBoard(checkPossiblity["board"]);
        if (win1[0] == 1) {
            console.log("User Won Game");
            break;
        }
        
        if (count == 9) {
            break;
        }
        console.log("Computer Turn");
        checkPossiblity = utility.computerTurn(checkPossiblity);
        count++;
        win1 = utility.checkWinner(checkPossiblity);
        utility.displayBoard(checkPossiblity["board"]);
        if (win1[1] == 1) {
            console.log("Computer Won Game");
            break;
        }

    } while (count != 9);
    if (win1[0] == 0 && win1[1] == 0)
        console.log("Match draw");

    

}


module.exports = TicTacToe();