/*************************************************************************************************
 * @purpose	:contains class Queue and methods require to implement queue
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
/**
 * class queue contains rear,front,maximum size of queue and queue array
 */
class Queue {
    constructor() {
        this.rear = -1;
        this.front = -1;
        this.MAX = 100;
        this.queue = new Array(this.MAX);
    }
    /**
     * @return true if rear equal to front otherwise false
     */
    isEmpty() {
        return this.rear == this.front;
    }
    /**
     * @returns true if rear equal to max-1 otherwise false
     */
    isFull() {
        return this.rear == this.MAX - 1;
    }
    /**
     * 
     * @param {*} item item to be added into queue
     */
    enqueue(item) {
        try {
            let regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(item))
                throw 'data to be added should not contain special symbol';
            if (item == 'undefined')
                throw 'data to be added should not be undefined';
            if (item == null)
                throw 'data to be added should not be null';

            if (this.isFull()) {
                throw 'you should not into fulll queue';
            }
            else {
                this.queue[++this.rear] = item;
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
    /**
     * @return element of queue which is pointed by front
     */
    dequeue() {
        try {
            if (this.isEmpty()) {
                throw 'you should not remove item from empty queue';
            }
            else {
                let item = this.queue[++this.front];
                return item;
            }
        } catch (e) {
            return e;
        }
    }
    /**
     * display queue
     */
    display() {

        try {
            if (this.isEmpty()) {
                throw 'you should not display empty queue';
            } else {
                let mFront = this.front;

                for (let i = ++mFront; i <= this.rear; i++) {
                    process.stdout.write(`${this.queue[i]} `);
                }
            }
            return 'success';
        } catch (e) {

            console.log(e);
            return e;
        }
    }
    /**
     * return size of queue
     */
    size() {
        try {
            if (this.isEmpty()) {
                throw 'you should not find size of empty queue';
            }
            let mFront = this.front;
            let count = 0;
            for (let i = mFront; i < this.queue; i++) {
                count++;
            }
            return count;
        } catch (e) {
            return e;
        }
    }
    /**
     * return last element of queue
     */
    getLastItem() {
        try {
            let mFront = this.front;
            let count = 0;
            for (let i = mFront; i < this.queue; i++) {
                count = this.queue[i];
            }
            return count;
        } catch (e) {
            return e
        }
    }
    /**
    *   
    */
    addRear(data) {
        try {
            if (this.rear == -1) {
                this.rear = this.rear + 1;
                this.front = this.front + 1;
            }
            else {
                this.rear = this.rear + 1;
            }
            this.queue[this.rear] = data;
        } catch (e) {

        }
    }
    /**
     * 
     */
    deteteRear() {
        let deletedElement;
        if (this.rear > -1) {
            deletedElement = this.queue[this.rear];
            this.rear = this.rear - 1;
            return deletedElement;
        }
    }
}
module.exports = { Queue };