/*************************************************************************************************
 * @purpose	:contains class Stack and methods require to implement stack
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
/**
 * class queue contains top,maximum size of stack and stack array
 */
class Stack {
    constructor() {
        this.TOP = -1;
        this.MAX = 100;
        this.stk = new Array(this.MAX);
    }
    /**
     * @return true if top equal to -1 otherwise false
     */
    isEmpty() {
        return this.TOP == -1;
    }
    /**
     * @return true if top equal to MAX-1 otherwise false
     */
    isFull() {
        return this.TOP == this.MAX - 1;
    }
    /**
     * 
     * @param {*} data which is to be push into stack
     */
    push(data) {
        try {
            
            if (data == 'undefined')
                throw 'data to be pushed should not be undefined';

            if (this.isFull()) {
                throw 'stack overflow';
            }
            else {
                this.TOP=this.TOP+1;
                this.stk[this.TOP] = data;
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
    /**
     * return element of stack which is pointed by top of stack
     */
    pop() {
        try {
            if (this.isEmpty()) {
                throw 'you should not remove from empty stack';
            }
            else {
                let item = this.stk[this.TOP];
                this.TOP--;
                return item;
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * return top element of stack without removing it
     */
    peek() {
        try {
            if (this.isEmpty()) {
                throw 'you should not peek top element of stack if stack is empty';
            }
            else {
                let item = this.stk[this.TOP];
                return item;
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * display element of stack
     */
    display() {
        try {
            if (this.isEmpty()) {
                throw 'you should not display element of stack if stack is empty';
            }
            let top = this.TOP;
            while (top > -1) {
                console.log('hello ' + stk[top--]);
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
}

module.exports = { Stack };