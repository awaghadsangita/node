/*********************************************************************************************************
 * @purpose	:shuffle the cards using random method and then distribute 9 Cards to 4 Players and Print the 
 *          cards the received by the 4 players.sort by suit and maintain the cards in a queue implemented 
 *          using linked list.
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:04-09-2019
 * 
 **********************************************************************************************************/

const linkedlistUtility = require('../../Utility/LinkedList');
class Deck {
    constructor() {
        this.card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
        this.suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.playes = [[], []];
    }
    /**
     * @description:suffle cards of deck
     */
    shuffle() {
        for (let i = 0; i < 52; i++) {
            let min = 1;
            let max = 52 - i;
            let r = Math.floor(min + Math.random() * (max + 1 - min))
            let temp = this.card[r];
            this.card[r] = this.card[i];
            this.card[i] = temp;
        }
    }
    /**
     * @description:display deck of cards on how you call
     */
    display() {
        for (let i = 0; i < 52; i++) {
            if (this.card[i] >= 0 && this.card[i] < 13) {
                console.log(`${this.suit[0]} :${this.rank[this.card[i] % 13]}`);
            }
            else if (this.card[i] >= 13 && this.card[i] < 26) {
                console.log(`${this.suit[1]} :${this.rank[this.card[i] % 13]}`);
            } else if (this.card[i] >= 26 && this.card[i] < 39) {
                console.log(`${this.suit[2]} :${this.rank[this.card[i] % 13]}`);
            } else if (this.card[i] >= 39 && this.card[i] < 52) {
                console.log(`${this.suit[3]} :${this.rank[this.card[i] % 13]}`);
            }
        }
    }
    /**
     * @description:distribute 9 card to each player 
     */
    distributeCards() {
        let i = 0;
        let k = 0
        this.playes[i] = new Array();
        for (let j = 0; j < 4; j++) {
            this.playes[j] = new Array();
            for (let i = 0; i < 13; i++) {
                this.playes[j][i] = this.card[k++];
            }
        }

    }
    /**
     * @description after sorting cards,form queue implemented using linked list
     */
    sortCard() {
        try {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 13; j++) {
                    for (let k = 0; k < 13 - j; k++) {
                        if (this.playes[i][k] > this.playes[i][k + 1]) {
                            let temp = this.playes[i][k];
                            this.playes[i][k] = this.playes[i][k + 1];
                            this.playes[i][k + 1] = temp;
                        }
                    }
                }
            }
            let linkedListObj = [];
            for (let i = 0; i < 4; i++) {
                linkedListObj[i] = new linkedlistUtility.LinkList();
                for (let j = 0; j < 13; j++) {
                    let sortedCard = '';
                    if (this.playes[i][j] >= 0 && this.playes[i][j] < 13) {
                        let s = this.suit[0];
                        let r = this.rank[this.playes[i][j] % 13];
                        sortedCard = s + r;

                    }
                    else if (this.playes[i][j] >= 13 && this.playes[i][j] < 26) {
                        let s = this.suit[1];
                        let r = this.rank[this.playes[i][j] % 13];
                        sortedCard = s + r;

                    } else if (this.playes[i][j] >= 26 && this.playes[i][j] < 39) {
                        let s = this.suit[2];
                        let r = this.rank[this.playes[i][j] % 13];
                        sortedCard = s + r;

                    } else if (this.playes[i][j] >= 39 && this.playes[i][j] < 52) {
                        let s = this.suit[3];
                        let r = this.rank[this.playes[i][j] % 13];
                        sortedCard = s + r;

                    }
                    if (sortedCard != 'undefined' && sortedCard != null && sortedCard != '') {
                        let node = new linkedlistUtility.Node(sortedCard, null);
                        let e = linkedListObj[i].insertAtEnd(node);
                        if (e == 'linked list node data should not contain special symbol' || e == 'linked list data should not be undefined')
                            throw e;
                    }
                }
            }
            for (let i = 0; i < 4; i++) {
                let k = i + 1;
                console.log(`\n********** Player : ${k} ********** `)
                let e = linkedListObj[i].display();
                console.log();
                if (e == 'list should not be empty')
                    throw e;

            }
        } catch (e) {
            console.log(e);
        }
    }
    /**
     * @description :display cards distributed to four player without sorting
     */
    displayDistributeCards() {
        console.log('====================================================================');
        console.log('\t\tCARDS DISTRIBUED AS FOLLOWS');
        console.log('====================================================================');
        for (let j = 0; j < 4; j++) {
            let k = j + 1;
            console.log(`*********** Player :${k} ***********`);
            for (let i = 0; i < 13; i++) {
                if (this.playes[j][i] >= 0 && this.playes[j][i] < 13) {
                    console.log(`${this.suit[0]} :${this.rank[this.playes[j][i] % 13]}`);
                }
                else if (this.playes[j][i] >= 13 && this.playes[j][i] < 26) {
                    console.log(`${this.suit[1]} :${this.rank[this.playes[j][i] % 13]}`);
                } else if (this.playes[j][i] >= 26 && this.playes[j][i] < 39) {
                    console.log(`${this.suit[2]} :${this.rank[this.card[i] % 13]}`);
                } else if (this.playes[j][i] >= 39 && this.playes[j][i] < 52) {
                    console.log(`${this.suit[3]} :${this.rank[this.playes[j][i] % 13]}`);
                }
            }
            console.log();
        }
    }
    /**
     * @description :main method calling various method in sequence
     */
    main() {
        this.shuffle();
        this.distributeCards();
        this.displayDistributeCards();
        this.distributeCards()
        this.sortCard();
    }
}
module.exports = { Deck };
let obj = new Deck();
obj.main();