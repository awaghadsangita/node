/*********************************************************************************
 * @purpose :contains all methods which are require frequently in different module
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :21-08-2019
 * 
 **********************************************************************************/
const readInput = require('readline-sync');
let permute = [];
let count = 0;
let total = 0;
module.exports = {

    /**
     * return string containing only letters
     */
    getString() {
        var format = /^[a-zA-Z]{1,}$/;
        var inputString = readInput.question();

        if (format.test(inputString)) {
            return inputString;
        }
        else {
            throw 'input must contain letters only';
        }
    },
    /**
     * return string containing alphanumeric and special characters
     */
    getNextLine() {

        return readInput.question();
    },
    /**
     * return string containing only letters and space
     */
    getName()
    {
        var inputString = readInput.question();
        var format = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
       
        if (format.test(inputString)) {
            return inputString;
        }
        else {
            throw new Error('input must contain letters and spaces only');
        }
        
    },
    /**
     * return number which start with 7,8,or 9 and 10 digit lig
     */
    getMobileNumber()
    {
        var inputString = readInput.question();
        var format = /^[7-9]{1}[0-9]{9}$/;
        if (format.test(inputString)) {
            return inputString;
        }
        else {
            throw new Error('invalid mobile number');
        }
        
    },
    /**
     * return number from keyboard
     */
    getInputNumber() {
        return readInput.questionInt();
    },
    /**
     * return float number from keyboard
     */
    getFloatInput() {
        return readInput.questionFloat().toFixed(2);
    },
    /**
     * return boolean number from keyboard
     */
    getBooleanInput() {
        return readInput.question();
    },

    /**
     * return true if year is leap year
     */
    isLeapYear(year) {
        var isLeap = false;
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    isLeap = true;
                }
                else {
                    isLeap = false;
                }
            }
            else {
                isLeap = true;
            }

        }
        else {
            isLeap = false;
        }
        return isLeap;
    },
    /**
     * return prime factors in string format
     */
    calculatePrimeFactor(number) {
        var temp = number;
        var primefactor = "";
        for (let i = 2; i * i < number; i++) {
            if (temp % i == 0.0) {
                primefactor = primefactor + i + " ";
                temp /= i;
            }
        }
        if (temp > 2) {
            primefactor = primefactor + temp;
        }
        return primefactor;
    },
    /**
     * return associative array of win count ,loosecount,is achieve goal,is win variables
     */
    gamblerGame(stake, goal, bets) {
        let betsCount = 0;
        let winCount = 0;
        let looseCount = 0;
        let isWin = false;
        let cash = stake;
        let isAchiveGoal = false;
        while (betsCount < bets) {
            betsCount++;
            if (Math.random() > 0.5) {
                winCount++;
                cash++;
            }
            else {
                looseCount++;
                cash--;
            }
            if (cash == goal) {
                isAchiveGoal = true;

                break;
            }
        }
        if (cash > stake)
            isWin = true;
        var result = { "looseCount": looseCount, "winCount": winCount, "isWin": isWin, "bets": betsCount, "isAchiveGoal": isAchiveGoal };
        return result;
    },
    /**
     * return array of distance coupon numbers
     */
    generateCoupanNumbers(noOfCoupans) {
        let coupans = new Array(noOfCoupans);
        let count = 0;

        for (let j = 0; j <= noOfCoupans; j++) {
            let k = 0;
            let coupannumber = Math.ceil(Math.random() * noOfCoupans);
            for (let i = 0; i < j; i++) {
                if (coupans[i] == coupannumber)
                    break;
                k++;
            }
            if (j == k) {
                coupans[count] = coupannumber;
                count++;
            }
            j = count;
        }

        return coupans;
    },
    /**
     * reture array two d array contains all elements adds to zero
     */
    sumofThreeIntegerAddsZero(a) {
        try {
            if (a.length <= 0)
                throw 'size of array should not be less than one';
            for (let i = 0; i < a.length; i++) {
                if (typeof a[i] == 'string')
                    throw 'array element should not be string';
            }
            let arr = [];

            for (let first = 0; first < a.length - 2; first++) {
                for (let second = first + 1; second < a.length - 1; second++) {
                    for (let third = second + 1; third < a.length; third++) {
                        if (a[first] + a[second] + a[third] == 0) {
                            arr.push({ "first": a[first], "second": a[second], "third": a[third] });

                        }
                    }
                }
            }
            return { "result": arr, "testcaseresult": "success" };
        }
        catch (e) {
            return { "result": "", "testcaseresult": e };
        }
    }
    ,
    /**
     * return distance from origin(0,0) to point(x,y)
     */
    calculateDistance(x, y) {
        try {
            if (typeof x == 'string' || typeof y == 'string')
                throw 'value of x and value of y should not be string';

            let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            return { "result": distance, "testcaseresult": "success" };
        } catch (e) {
            return { "result": "", "testcaseresult": e };
        }
    },
    /**
     *return all permutation of given string 
     */
    findPermutation(word, l, r, totalPermute) {
        try {
            if (typeof word == 'number') {
                throw "input value should not be number";
            }
            if (word.length == 0) {
                throw "input value should not be of length zero";
            }
            let format = /^[a-zA-Z]{1,}$/;
            if (!format.test(word)) {
                throw "input value should not be contain special symbol";
            }
            if (l == r) {
                permute[count] = word;
                count = count + 1;
                if (count == totalPermute) {
                    let itr, j, k = 0;
                    for (itr = 0; itr < totalPermute; itr++) {
                        for (j = 0; j < itr; j++) {
                            if (permute[j] == permute[itr])
                                break;
                        }
                        if (itr == j) {
                            permute[k] = permute[itr];
                            k++;
                        }
                    }

                    let arr = { "result": permute, "testcaseresult": "success" };
                    console.log(arr["result"]);
                    return arr;
                }


            }
            else {
                for (let i = l; i <= r; i++) {
                    word = this.swapString(word, l, i);
                    this.findPermutation(word, l + 1, r, totalPermute);
                    word = this.swapString(word, l, i);
                }
            }
        } catch (e) {
            return { "result": "", "testcaseresult": e };
        }
    },
    /**
     * swap alphabets at position l and i of string
     */
    swapString(string, l, i) {
        let array = string.split('');

        let temp = array[l];
        array[l] = array[i];
        array[i] = temp;

        string = array.join('');
        return string;
    },
    /**
    * return roots of quadratic equation 
    */
    findRoots(a, b, c) {
        try {
            if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number')
                throw 'ax^2+bx+c=0 in this equation value a,b and c should not be string';

            if (a == 0)
                throw 'ax^2+bx+c=0 in this equation value a should not be zero';
            let delta = b * b - 4 * a * c;
            let roots = [];
            if (delta > 0)// if delta is greater than zero then roots are real and different
            {
                root1 = Math.floor((-b + Math.sqrt(delta)) / (2 * a));
                root2 = Math.floor((-b - Math.sqrt(delta)) / (2 * a));
                roots = { "quote": "roots are real and different", "firstroot": root1, "secondroot": root2 };
            } else if (delta < 0) // if delta is less than zero then roots are complex
            {
                // let sqrt_avl = Math.sqrt(delta);
                roots = { "quote": "roots are complex", "firstroot": `( ${-b} + Math.sqrt(${delta})i)/${2 * a})`, "secondroot": `( ${-b} - Math.sqrt(${delta})i)/${2 * a})` };
            }
            return { 'result': roots, 'testcaseresult': 'success' };
        } catch (e) {
            return { 'result': '', 'testcaseresult': e };
        }
    },
    /**
     * 
     * @param {*} board 
     */
    calculateWindChill(t, v) {
        try {
            if (typeof t == 'string')
                throw 'temperature should not be string';
            if (typeof v == 'string')
                throw 'wind speed should not be string';
            if (Math.abs(t) > 50)
                throw 'temperature should not be greater than 50 in its absolute value';
            if (v > 120 || v < 3)
                throw 'wind speed(v) should not be larger than 120 or should not be less than 3';

            let windChillTemperature = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);

            return { 'result': windChillTemperature, "testcaseresult": "success" };
        } catch (e) {
            return { 'result': "", "testcaseresult": e };
        }
    },
    /**
     *  display board for Tic Tac toe Game 
     */
    displayBoard(board) {

        console.log(`\t\t| ${board[0][0]} | ${board[0][1]} | ${board[0][2]} |`);
        console.log(`\t\t|---|---|---|`);
        console.log(`\t\t| ${board[1][0]} | ${board[1][1]} | ${board[1][2]} |`);
        console.log(`\t\t|---|---|---|`);
        console.log(`\t\t| ${board[2][0]} | ${board[2][1]} | ${board[2][2]} |`);

    },
    /**
     * user enter position.program check the availability of position
     */
    userTurn(checkPossibility) {
        let position;
        // do {
        console.log("Enter the Value");
        position = this.getInputNumber();
        switch (position) {
            case 1: if (checkPossibility["board"][0][0] == 'X' || checkPossibility["board"][0][0] == 'O') {
                this.userTurn(checkPossibility);
            }
            else {
                console.log("1111");
                checkPossibility["board"][0][0] = 'X';
                checkPossibility["countX"]["count1"]++;
                checkPossibility["countX"]["count4"]++;
                checkPossibility["countX"]["count7"]++;
            }
                break;
            case 2: if (checkPossibility["board"][0][1] == 'X' || checkPossibility["board"][0][1] == 'O') {
                this.userTurn(checkPossibility);
            }
            else {
                checkPossibility["board"][0][1] = 'X';
                checkPossibility["countX"]["count5"]++;
                checkPossibility["countX"]["count1"]++;
            }
                break;
            case 3: if (checkPossibility["board"][0][2] == 'X' || checkPossibility["board"][0][2] == 'O') {
                this.userTurn(checkPossibility);
            }
            else {
                checkPossibility["board"][0][2] = 'X';
                checkPossibility["countX"]["count1"]++;
                checkPossibility["countX"]["count6"]++;
                checkPossibility["countX"]["count8"]++;
            }
                break;
            case 4:
                if (checkPossibility["board"][1][0] == 'X' || checkPossibility["board"][1][0] == 'O') {
                    this.userTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][1][0] = 'X';
                    checkPossibility["countX"]["count2"]++;
                    checkPossibility["countX"]["count4"]++;
                }
                break;
            case 5:
                if (checkPossibility["board"][1][1] == 'X' || checkPossibility["board"][1][1] == 'O') {
                    this.userTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][1][1] = 'X';
                    checkPossibility["countX"]["count5"]++;
                    checkPossibility["countX"]["count2"]++;
                    checkPossibility["countX"]["count7"]++;
                    checkPossibility["countX"]["count8"]++;
                }
                break;
            case 6:
                if (checkPossibility["board"][1][2] == 'X' || checkPossibility["board"][1][2] == 'O') {
                    this.userTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][1][2] = 'X';
                    checkPossibility["countX"]["count6"]++;
                    checkPossibility["countX"]["count2"]++;
                }
                break;
            case 7:
                if (checkPossibility["board"][2][0] == 'X' || checkPossibility["board"][2][0] == 'O') {
                    this.userTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][2][0] = 'X';
                    checkPossibility["countX"]["count3"]++;
                    checkPossibility["countX"]["count4"]++;
                    checkPossibility["countX"]["count8"]++;
                }
                break;
            case 8:
                if (checkPossibility["board"][2][1] == 'X' || checkPossibility["board"][2][1] == 'O') {
                    this.userTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][2][1] = 'X';
                    checkPossibility["countX"]["count3"]++;
                    checkPossibility["countX"]["count5"]++;
                }
                break;
            case 9: if (checkPossibility["board"][2][2] == 'X' || checkPossibility["board"][2][2] == 'O') {
                this.userTurn(checkPossibility);
            }
            else {
                checkPossibility["board"][2][2] = 'X';
                checkPossibility["countX"]["count6"]++;
                checkPossibility["countX"]["count3"]++;
                checkPossibility["countX"]["count7"]++;
            }
                break;
            default: console.log("enter valid choice");
                this.userTurn(checkPossibility);

        }
        // } while (position < 1 || position > 9);
        return checkPossibility;
    },
    /**
     * computer enter position.program check the availability of position
     */
    computerTurn(checkPossibility) {
        let position;
        // do {
        console.log("Computer Turn");
        position = this.checkWinPosition(checkPossibility);
        console.log(position);
        switch (position) {
            case 1: if (checkPossibility["board"][0][0] == 'X' || checkPossibility["board"][0][0] == 'O') {
                this.computerTurn(checkPossibility);
            }
            else {
                console.log("1111");
                checkPossibility["board"][0][0] = 'O';
                checkPossibility["countO"]["count1"]++;
                checkPossibility["countO"]["count4"]++;
                checkPossibility["countO"]["count7"]++;
            }
                break;
            case 2: if (checkPossibility["board"][0][1] == 'X' || checkPossibility["board"][0][1] == 'O') {
                this.computerTurn(checkPossibility);
            }
            else {
                checkPossibility["board"][0][1] = 'O';
                checkPossibility["countO"]["count5"]++;
                checkPossibility["countO"]["count1"]++;
            }
                break;
            case 3: if (checkPossibility["board"][0][2] == 'X' || checkPossibility["board"][0][2] == 'O') {
                this.computerTurn(checkPossibility);
            }
            else {
                checkPossibility["board"][0][2] = 'O';
                checkPossibility["countO"]["count1"]++;
                checkPossibility["countO"]["count6"]++;
                checkPossibility["countO"]["count8"]++;
            }
                break;
            case 4:
                if (checkPossibility["board"][1][0] == 'X' || checkPossibility["board"][1][0] == 'O') {
                    this.computerTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][1][0] = 'O';
                    checkPossibility["countO"]["count2"]++;
                    checkPossibility["countO"]["count4"]++;
                }
                break;
            case 5:
                if (checkPossibility["board"][1][1] == 'X' || checkPossibility["board"][1][1] == 'O') {
                    this.computerTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][1][1] = 'O';
                    checkPossibility["countO"]["count5"]++;
                    checkPossibility["countO"]["count2"]++;
                    checkPossibility["countO"]["count7"]++;
                    checkPossibility["countO"]["count8"]++;
                }
                break;
            case 6:
                if (checkPossibility["board"][1][2] == 'X' || checkPossibility["board"][1][2] == 'O') {
                    this.computerTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][1][2] = 'O';
                    checkPossibility["countO"]["count6"]++;
                    checkPossibility["countO"]["count2"]++;
                }
                break;
            case 7:
                if (checkPossibility["board"][2][0] == 'X' || checkPossibility["board"][2][0] == 'O') {
                    this.computerTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][2][0] = 'O';
                    checkPossibility["countO"]["count3"]++;
                    checkPossibility["countO"]["count4"]++;
                    checkPossibility["countO"]["count8"]++;
                }
                break;
            case 8:
                if (checkPossibility["board"][2][1] == 'X' || checkPossibility["board"][2][1] == 'O') {
                    this.computerTurn(checkPossibility);
                }
                else {
                    checkPossibility["board"][2][1] = 'O';
                    checkPossibility["countO"]["count3"]++;
                    checkPossibility["countO"]["count5"]++;
                }
                break;
            case 9: if (checkPossibility["board"][2][2] == 'X' || checkPossibility["board"][2][2] == 'O') {
                this.computerTurn(checkPossibility);
            }
            else {
                checkPossibility["board"][2][2] = 'O';
                checkPossibility["countO"]["count6"]++;
                checkPossibility["countO"]["count3"]++;
                checkPossibility["countO"]["count7"]++;
            }
                break;
            default: console.log("Enter Valid Value");
                this.computerTurn(checkPossibility);
        }
        // } while (position < 1 || position > 9);
        return checkPossibility;
    },
    /**
     * computer return win position if available otherwise give random number between 1 to 9
     */
    checkWinPosition(checkPossibility) {
        var isfound = false;
        if (checkPossibility["countX"]["count1"] == 2) {
            if (checkPossibility["board"][0][0] != 'X' && checkPossibility["board"][0][0] != 'O') {
                isfound = true;
                return 1;
            }
            else if (checkPossibility["board"][0][1] != 'X' && checkPossibility["board"][0][1] != 'O') {
                isfound = true;
                return 2;
            }
            else if (checkPossibility["board"][0][2] != 'X' && checkPossibility["board"][0][2] != 'O') {
                isfound = true;
                return 3;
            }
        } else if (checkPossibility["countX"]["count2"] == 2) {
            if (checkPossibility["board"][1][0] != 'X' && checkPossibility["board"][1][0] != 'O') {
                isfound = true;
                return 4;
            }
            else if (checkPossibility["board"][1][1] != 'X' && checkPossibility["board"][1][1] != 'O') {
                isfound = true;
                return 5;
            }
            else if (checkPossibility["board"][1][2] != 'X' && checkPossibility["board"][1][2] != 'O') {
                isfound = true;
                return 6;
            }
        } else if (checkPossibility["countX"]["count3"] == 2) {
            if (checkPossibility["board"][2][0] != 'X' && checkPossibility["board"][2][0] != 'O') {
                isfound = true;
                return 7;
            }
            else if (checkPossibility["board"][2][1] != 'X' && checkPossibility["board"][2][1] != 'O') {
                isfound = true;
                return 8;
            }
            else if (checkPossibility["board"][2][2] != 'X' && checkPossibility["board"][2][2] != 'O') {
                isfound = true;
                return 9;
            }
        }
        else if (checkPossibility["countX"]["count4"] == 2) {
            if (checkPossibility["board"][0][0] != 'X' && checkPossibility["board"][0][0] != 'O') {
                isfound = true;
                return 1;
            }
            else if (checkPossibility["board"][1][0] != 'X' && checkPossibility["board"][1][0] != 'O') {
                isfound = true;
                return 4;
            }
            else if (checkPossibility["board"][2][0] != 'X' && checkPossibility["board"][2][0] != 'O') {
                isfound = true;
                return 7;
            }
        }
        else if (checkPossibility["countX"]["count5"] == 2) {
            if (checkPossibility["board"][0][1] != 'X' && checkPossibility["board"][0][1] != 'O') {
                isfound = true;
                return 2;
            }
            else if (checkPossibility["board"][1][1] != 'X' && checkPossibility["board"][1][1] != 'O') {
                isfound = true;
                return 5;
            }
            else if (checkPossibility["board"][2][1] != 'X' && checkPossibility["board"][2][1] != 'O') {
                isfound = true;
                return 8;
            }
        } else if (checkPossibility["countX"]["count6"] == 2) {
            if (checkPossibility["board"][0][2] != 'X' && checkPossibility["board"][0][2] != 'O') {
                isfound = true;
                return 3;
            }
            else if (checkPossibility["board"][1][2] != 'X' && checkPossibility["board"][1][2] != 'O') {
                isfound = true;
                return 6;
            }
            else if (checkPossibility["board"][2][2] != 'X' && checkPossibility["board"][2][2] != 'O') {
                isfound = true;
                return 9;
            }
        } else if (checkPossibility["countX"]["count7"] == 2) {
            if (checkPossibility["board"][0][0] != 'X' && checkPossibility["board"][0][0] != 'O') {
                isfound = true;
                return 1;
            }
            else if (checkPossibility["board"][1][1] != 'X' && checkPossibility["board"][1][1] != 'O') {
                isfound = true;
                return 5;
            }
            else if (checkPossibility["board"][2][2] != 'X' && checkPossibility["board"][2][2] != 'O') {
                isfound = true;
                return 9;
            }
        } else if (checkPossibility["countX"]["count8"] == 2) {
            if (checkPossibility["board"][2][0] != 'X' && checkPossibility["board"][2][0] != 'O') {
                isfound = true;
                return 7;
            }
            else if (checkPossibility["board"][1][1] != 'X' && checkPossibility["board"][1][1] != 'O') {
                isfound = true;
                return 5;
            }
            else if (checkPossibility["board"][0][2] != 'X' && checkPossibility["board"][0][2] != 'O') {
                isfound = true;
                return 3;
            }
        }
        else if (checkPossibility["countO"]["count1"] == 2) {
            if (checkPossibility["board"][0][0] != 'O' && checkPossibility["board"][0][0] != 'X') {
                isfound = true;
                return 1;
            }
            else if (checkPossibility["board"][0][1] != 'O' && checkPossibility["board"][0][1] != 'X') {
                isfound = true;
                return 2;
            }
            else if (checkPossibility["board"][0][2] != 'O' && checkPossibility["board"][0][2] != 'X') {
                isfound = true;
                return 3;
            }
        } else if (checkPossibility["countO"]["count2"] == 2) {
            if (checkPossibility["board"][1][0] != 'O' && checkPossibility["board"][1][0] != 'X') {
                isfound = true;
                return 4;
            }
            else if (checkPossibility["board"][1][1] != 'O' && checkPossibility["board"][1][1] != 'X') {
                isfound = true;
                return 5;
            }
            else if (checkPossibility["board"][1][2] != 'O' && checkPossibility["board"][1][2] != 'X') {
                isfound = true;
                return 6;
            }
        } else if (checkPossibility["countO"]["count3"] == 2) {
            if (checkPossibility["board"][2][0] != 'O' && checkPossibility["board"][2][0] != 'X') {
                isfound = true;
                return 7;
            }
            else if (checkPossibility["board"][2][1] != 'O' && checkPossibility["board"][2][1] != 'X') {
                isfound = true;
                return 6;
            }
            else if (checkPossibility["board"][2][2] != 'O' && checkPossibility["board"][2][2] != 'X') {
                isfound = true;
                return 9;
            }
        }
        else if (checkPossibility["countO"]["count4"] == 2) {
            if (checkPossibility["board"][0][0] != 'O' && checkPossibility["board"][0][0] != 'X') {
                isfound = true;
                return 1;
            }
            else if (checkPossibility["board"][1][1] != 'O' && checkPossibility["board"][1][1] != 'X') {
                isfound = true;
                return 4;
            }
            else if (checkPossibility["board"][2][0] != 'O' && checkPossibility["board"][2][0] != 'X') {
                isfound = true;
                return 7;
            }
        }
        else if (checkPossibility["countO"]["count5"] == 2) {
            if (checkPossibility["board"][0][1] != 'O' && checkPossibility["board"][0][1] != 'X') {
                isfound = true;
                return 2;
            }
            else if (checkPossibility["board"][1][1] != 'O' && checkPossibility["board"][1][1] != 'X') {
                isfound = true;
                return 5;
            }
            else if (checkPossibility["board"][2][1] != 'O' && checkPossibility["board"][2][1] != 'X') {
                isfound = true;
                return 8;
            }
        }
        else if (checkPossibility["countO"]["count6"] == 2) {
            if (checkPossibility["board"][0][2] != 'O' && checkPossibility["board"][0][2] != 'X') {
                isfound = true;
                return 3;
            }
            else if (checkPossibility["board"][1][2] != 'O' && checkPossibility["board"][1][2] != 'X') {
                isfound = true;
                return 6;
            }
            else if (checkPossibility["board"][2][2] != 'O' && checkPossibility["board"][2][2] != 'X') {
                isfound = true;
                return 9;
            }
        } else if (checkPossibility["countO"]["count7"] == 2) {
            if (checkPossibility["board"][0][0] != 'O' && checkPossibility["board"][0][0] != 'X') {
                isfound = true;
                return 1;
            }
            else if (checkPossibility["board"][1][1] != 'O' && checkPossibility["board"][1][1] != 'X') {
                isfound = true;
                return 5;
            }
            else if (checkPossibility["board"][2][2] != 'O' && checkPossibility["board"][2][2] != 'X') {
                isfound = true;
                return 9;
            }
        }
        else if (checkPossibility["countO"]["count8"] == 2) {
            if (checkPossibility["board"][2][0] != 'O' && checkPossibility["board"][2][0] != 'X') {
                isfound = true;
                return 7;
            }
            else if (checkPossibility["board"][1][1] != 'O' && checkPossibility["board"][1][1] != 'X') {
                isfound = true;
                return 5;
            }
            else if (checkPossibility["board"][0][2] != 'O' && checkPossibility["board"][0][2] != 'X') {
                isfound = true;
                return 3;
            }
        } else {
            if (checkPossibility["board"][0][0] != 'O' && checkPossibility["board"][0][0] != 'X')
                return 1;
            else if (checkPossibility["board"][0][1] != 'O' && checkPossibility["board"][0][1] != 'X')
                return 2;
            else if (checkPossibility["board"][0][2] != 'O' && checkPossibility["board"][0][2] != 'X')
                return 3;
            else if (checkPossibility["board"][1][0] != 'O' && checkPossibility["board"][1][0] != 'X')
                return 4;
            else if (checkPossibility["board"][1][1] != 'O' && checkPossibility["board"][1][1] != 'X')
                return 5;
            else if (checkPossibility["board"][1][2] != 'O' && checkPossibility["board"][1][2] != 'X')
                return 6;
            else if (checkPossibility["board"][2][0] != 'O' && checkPossibility["board"][2][0] != 'X')
                return 7;
            else if (checkPossibility["board"][2][1] != 'O' && checkPossibility["board"][2][1] != 'X')
                return 8;
            else if (checkPossibility["board"][2][2] != 'O' && checkPossibility["board"][2][2] != 'X')
                return 9;

            else if (checkPossibility["board"][0][0] != 'O' && checkPossibility["board"][0][0] != 'X')
                return 1;
            else if (checkPossibility["board"][1][0] != 'O' && checkPossibility["board"][1][0] != 'X')
                return 4;
            else if (checkPossibility["board"][2][0] != 'O' && checkPossibility["board"][2][0] != 'X')
                return 7;
            else if (checkPossibility["board"][0][1] != 'O' && checkPossibility["board"][0][1] != 'X')
                return 2;
            else if (checkPossibility["board"][1][1] != 'O' && checkPossibility["board"][1][1] != 'X')
                return 5;
            else if (checkPossibility["board"][2][1] != 'O' && checkPossibility["board"][2][1] != 'X')
                return 8;
            else if (checkPossibility["board"][0][2] != 'O' && checkPossibility["board"][0][2] != 'X')
                return 3;
            else if (checkPossibility["board"][1][2] != 'O' && checkPossibility["board"][1][2] != 'X')
                return 6;
            else if (checkPossibility["board"][2][2] != 'O' && checkPossibility["board"][2][2] != 'X')
                return 9;
            else if (checkPossibility["board"][0][0] != 'O' && checkPossibility["board"][0][0] != 'X')
                return 1;
            else if (checkPossibility["board"][1][1] != 'O' && checkPossibility["board"][1][1] != 'X')
                return 5;
            else if (checkPossibility["board"][2][2] != 'O' && checkPossibility["board"][2][2] != 'X')
                return 9;
            else if (checkPossibility["board"][2][0] != 'O' && checkPossibility["board"][2][0] != 'X')
                return 7;
            else if (checkPossibility["board"][1][1] != 'O' && checkPossibility["board"][1][1] != 'X')
                return 5;
            else if (checkPossibility["board"][0][2] != 'O' && checkPossibility["board"][0][2] != 'X')
                return 3;

        }
        if (!isfound) {
            return ((Math.floor(Math.random() * 9)) + 1);
        }
    },
    /**
     * check tic-tac-toe winner
     */
    checkWinner(checkPossibility) {
        var win = [0, 0];
        if (checkPossibility["countX"]["count1"] == 3 || checkPossibility["countX"]["count2"] == 3 || checkPossibility["countX"]["count3"] == 3 || checkPossibility["countX"]["count4"] == 3 || checkPossibility["countX"]["count5"] == 3 || checkPossibility["countX"]["count6"] == 3 || checkPossibility["countX"]["count7"] == 3 || checkPossibility["countX"]["count8"] == 3)
            win = [1, 0];
        else if (checkPossibility["countO"]["count1"] == 3 || checkPossibility["countO"]["count2"] == 3 || checkPossibility["countO"]["count3"] == 3 || checkPossibility["countO"]["count4"] == 3 || checkPossibility["countO"]["count5"] == 3 || checkPossibility["countO"]["count6"] == 3 || checkPossibility["countO"]["count7"] == 3 || checkPossibility["countO"]["count8"] == 3)
            win = [0, 1];

        return win;
    },
    /**
     * @param :unsorted array of strings
     * @return :sorted array of string 
     */
    insertionSort(arr) {
        try {
            if (arr.length <= 0)
                throw 'array size should be greater than zero';
            for (let k = 0; k < arr.length; k++) {
                if (typeof arr[k] == 'number')
                    throw 'array element can not be number';
            }
            for (let i = 1; i < arr.length; i++) {
                let key = arr[i];
                let j = i - 1;

                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
            return { "result": arr, "testcaseresult": "success" };
        } catch (e) {
            return { "result": arr, "testcaseresult": e };
        }
    },
    /**
     * @param :integerArray unsorted array of number
     * @returns:sorted array of numbers
     */
    bubbleSort(arr) {
        try {
            if (arr.length == 0)
                throw 'array size must be greater than zero';

            for (let k = 0; k < arr.length; k++) {
                if (typeof arr[k] != 'number')
                    throw 'array element should not be string';
            }
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return { "resut": arr, "testcaseresult": "success" };
        }
        catch (e) {
            return { "resut": " ", "testcaseresult": e };
        }
    },
    /**
     *@param    :array of unsorted strings,left starting index,mid,end index
     *@returns  :array of sorted string
     */
    merge(arr, l, m, r) {
        let i, j, k;
        let n1 = m - l + 1;
        let n2 = r - m;

        /* create temp arrays */
        let L = new Array(n1);
        let R = new Array(n2);

        /* Copy data to temp arrays L[] and R[] */
        for (i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        /* Merge the temp arrays back into arr[l..r]*/
        i = 0; // Initial index of first subarray 
        j = 0; // Initial index of second subarray 
        k = l; // Initial index of merged subarray 
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        /* Copy the remaining elements of L[], if there 
           are any */
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        /* Copy the remaining elements of R[], if there 
           are any */
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    },

    /**
     * l is for left index and r is right index of the sub-array of arr to be sorted
     */
    mergeSort(arr, l, r) {

        if (Math.floor(l) < Math.floor(r)) {
            // Same as (l+r)/2, but avoids overflow for large l and h 
            l = parseInt(l);
            r = parseInt(r);

            let m = l + (r - l) / 2;
            m = parseInt(m);

            // Sort first and second halves 
            this.mergeSort(arr, l, m);
            this.mergeSort(arr, m + 1, r);

            this.merge(arr, l, m, r);
        }


    },
    /**
     * @param   :take amount as a input paramter
     * @returns :nothing
     */
    getChange(amount) {
        try {
            if (typeof amount == 'float')
                throw 'amount should not be floating point value';
            if (typeof amount == 'string')
                throw 'amount should not be string';
            if (amount <= 0)
                throw 'amount should be greater than zero';
            const NOTE = [1000, 500, 100, 50, 10, 5, 2, 1];
            do {
                if (parseInt(amount / NOTE[count]) != 0 && NOTE[count] != 1) {
                    total = total + Math.floor(amount / NOTE[count]);
                    console.log(`Rs.${NOTE[count]} Notes :${(amount / NOTE[count]).toFixed(0)}.`);
                    amount = amount % NOTE[count];
                }
                if (NOTE[count] == 1) {
                    console.log(`Rs.${NOTE[count]} Notes :${amount}`);
                    amount = amount - amount;
                }
                count++;

            } while (amount > 0);
            console.log(`\nTotal Notes :${total} `);
            return { "result": "", "testcaseresult": "success" };
        } catch (e) {
            return { "result": "", "testcaseresult": e };
        }
    },
    /**
     * return 0 for sunday ,1 for monday and so on
     */
    getDayOfWeek(month, day, year) {
        try {
            if (month <= 0 || month > 12)
                throw "month should be between 1 and 12";
            if (day <= 0 || day > 31)
                throw "day should be between 1 and 31";

            let yo = year - parseInt((14 - month) / 12);
            let x = yo + parseInt(yo / 4) - parseInt(yo / 100) + parseInt(yo / 400);
            let mo = month + 12 * parseInt(((14 - month) / 12)) - 2;
            let d1 = parseInt((day + x + 31 * mo / 12) % 7);

            return { "result": parseInt(d1), "testcaseresult": "success" };
        } catch (e) {
            return { "result": "", "testcaseresult": e };
        }
    },
    /**
     * return converted temeperatur depending on method
     */
    convertTemperatur(temperatur, method) {
        try {
            if (typeof temperatur == 'string')
                throw 'temperatur should not be string';
            switch (method) {
                case "F": return { "result": (temperatur - 32) * 5 / 9, "testcaseresult": "success" };
                case "C": return { "result": (temperatur * 9 / 5) + 32, "testcaseresult": "success" };
            }

        } catch (e) {
            return { "result": "", "testcaseresult": e };
        }
    },
    /**
     * 
     * @param :p princial amount,n is number of years,r is rate of interest
     */
    calculatemonthlyPayment(p, n, r) {
        try {
            if (parseInt(p) < 1)
                throw "principal amount should not be less than one";
            if (parseInt(n) < 1)
                throw "number of year should not be less than one";
            if (parseInt(r) < 1)
                throw "rate of interest should not less than one";
            let payment = (p * r) / (1 - Math.pow((1 + r), -n));
            return { "result": payment, "testcaseresult": "success" };
        } catch (e) {
            return { "result": "", "testcaseresult": e };
        }
    },
    /**
     * return sqaure root of the number
     */
    calculateSqaureRoot(c) {
        try {
            if (c <= 0)
                throw 'number should be non negative';

            let epsilon = 1e-15;
            let t = c;
            while (Math.abs(t - c / t) > epsilon * t) {
                t = ((c / t) + t) / 2
            }
            return { "result": t.toFixed(2), "testCaseResult": 'success' };
        }
        catch (e) {
            return { "result": " ", "testCaseResult": e };
        }
    },
    /**
     *return binary number equivalent of decimal 
     */
    decimalToBinary(decimal) {
        try {
            if (decimal < 0)
                throw 'number should be greater than zero';
            if (decimal > 512)
                throw 'number should not be less than 512';
            if (typeof decimal == 'string')
                throw 'number should not be string';
            let binary = "";
            while (parseInt(decimal) > 0) {
                let reminder = decimal % 2;
                binary = parseInt(reminder) + binary;
                decimal = decimal / 2;
            }
            while (binary.length % 4 != 0) {
                binary = 0 + binary;
            }
            return { "result": binary, "testcaseresult": "success" };
        } catch (e) {
            return { "result": "", "testcaseresult": e };
        }
    },
    /**
     * return decimal equivalent of binary
     */
    binaryToDecimal(binaryArr) {
        let decimal = 0;
        let k = 0;
        for (let i = binaryArr.length - 1; i > 0; i-- , k++) {
            if (parseInt(binaryArr[i]) == 1) {
                decimal = decimal + Math.pow(2, k);
            }
        }
        return decimal;
    },
    /**
     * return index if element found a list otherwise return -1
     */
    binarySearch(array, searchKey) {
        array.sort();
        var high = array.length - 1;
        var low = 0;
        var mid = 0;
        while (low <= high) {

            mid = Math.floor((high + low) / 2);
            if (array[mid] === searchKey) {
                return mid;
            }

            if (searchKey > array[mid]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    },
    /**
     * @return factorial of number
     */
    getFactorial(n) {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact = fact * i;
        }
        return fact;
    },
    /**
     * @param start:specify start point of range
     * @param end:specify end point of range
     */
    getPrimeNumber(start, end) {
        try {
            if (typeof start == 'string' || typeof end == 'string') {
                throw 'starting and ending point should be number';
            }
            if (start < -1 || end < -1) {
                throw 'start and end point of range should not be negative';
            }
            if (start >end) {
                throw 'end point should not be less than start point in the range';
            }
            var primeNoArray = [];

            for (var i = start; i < end; i++) {
                for (var j = 2; j < i; j++) {
                    var isPrime = 1;
                    if (i % j == 0) {
                        isPrime = 0
                        break;
                    }
                }
                if (isPrime == 1 || i == 2) {
                    primeNoArray.push(i);

                }
            }

            return primeNoArray;
        }
        catch (e) {
            return e;
        }
    },
    /**
     * @return array of anagram and not anagram
     */
    getAnagram(arr) {
        try {
            
            let anagram = [[], []];
            anagram[0] = new Array();
            anagram[1] = new Array();
            for (let i = 0; i < arr.length - 1; i++) {
                let firstNumber = "";
                firstNumber = firstNumber + arr[i];
                let firstArray = firstNumber.split('');
                let isAnagram = false;
                for (let j = i + 1; j < arr.length; j++) {
                    let secondNumber = "";
                    secondNumber = secondNumber + arr[j];
                    let secondArray = secondNumber.split('');

                    if (firstArray.sort().join('') == secondArray.sort().join('')) {
                        anagram[0].push(arr[i]);
                        anagram[0].push(arr[j]);
                        isAnagram = true;
                        break;
                    }

                }
                if (isAnagram == false) {
                    anagram[1].push(arr[i]);
                }
            }
            return anagram;
        } catch (e) {
            return e;
        }
    },
    /**
     * return only array of anagrams
     */
    getOnlyAnagram(arr)
    {
        try {
            let anagram = [];
            for (let i = 0; i < arr.length - 1; i++) {
                let firstNumber = "";
                firstNumber = firstNumber + arr[i];
                let firstArray = firstNumber.split('');
                let isAnagram = false;
                for (let j = i + 1; j < arr.length; j++) {
                    let secondNumber = "";
                    secondNumber = secondNumber + arr[j];
                    let secondArray = secondNumber.split('');

                    if (firstArray.sort().join('') == secondArray.sort().join('')) {
                        anagram.push(arr[i]);
                        anagram.push(arr[j]);
                    }
                }
           }
            return anagram;
        } catch (e) {
            return e;
        }
    }

}
