/*************************************************************************************************
 * @purpose	:contains class Node,class DayNode and class LinkedList and methods require to implement
 *          linkedlist
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
/**
 * node class contain two fields data and next pointer
 */
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
/**
 * daynode class contain three fields day,date and next pointer
 */
class DayNode {
    constructor(day, data, next) {
        this.day = day;
        this.data = data;
        this.next = next;
    }
}
/**
 * linklist class contain head object and various method to require to implement linkedlist
 */
class LinkList {

    constructor() {
        this.HEAD = new Node();
    }
    /**
     * @returns true if head contain null
     */
    isEmpty() {
        let temp = this.HEAD.next;
        return typeof temp == 'undefined';
    }
    /**
     * 
     * @param {*} node as paramter which is going to be inserted 
     */
    insertFirst(node) {
        try {
            let regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(node.data))
                throw 'linked list node data should not contain special symbol';
            if (node.data == 'undefined')
                throw 'linked list data should not be undefined';

            if (this.isEmpty()) {
                this.HEAD = node;
            }
            else {
                node.next = this.HEAD;
                this.HEAD = node;
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} node as parameter which is going to be inserted in spcific position
     * @param {*} position specify position where node going to be inserted
     */

    insertAt(node, position) {
        try {
            let regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(node.data))
                throw 'linked list node data should not contain special symbol';
            if (node.data == 'undefined')
                throw 'linked list data should not be undefined';

            if (position == 1 && this.isEmpty()) {
                this.HEAD = node;
            }
            else if (position == 1) {
                node.setNext(this.HEAD);
                this.HEAD = node;
            }
            else {
                let count = 1;
                let temp = this.HEAD;
                while (count < pos - 1) {
                    temp = temp.getNext();
                    count = count + 1;
                }
                let current = temp.getNext();
                node.setNext(current.getNext());
                current.setNext(node);
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} node as paramter which is going to be inserted at end of linked list
     */
    insertAtEnd(node) {
        try {
            let regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(node.data)){
                throw 'linked list node data should not contain special symbol';

            }
            if (node.data == 'undefined')
                throw 'linked list data should not be undefined';

            let temp = this.HEAD;
            if (temp == null) {
                this.HEAD = node;
            }
            else {
                while (temp.next != null) {
                    temp = temp.next;
                }

                temp.next = node;
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
    /**
     * delete first node from linked list
     */
    deleteFirst() {
        try {
            if (this.isEmpty()) {
                throw 'you should not delete node from empty linked list';
            }
            else {
                let temp = this.HEAD;
                this.HEAD = temp.next;
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} position specify positon of node to be deleted
     */
    deleteAt(position) {
        try {
            if (this.isEmpty()) {
                throw 'you should not delete node from empty linked list';
            }
            if (position == 0) {
                throw 'you should not delete zeroth position node';
            }
            let length = 0;
            let ptr = this.HEAD;
            while (ptr != null) {
                length++;
                ptr = ptr.next;
            }
            if (position > length) {
                throw 'you should not delete node greater than size of linked list';
            }
            let count = 1;
            let temp = this.HEAD;
            if (position == 1) {
                this.HEAD = temp.next;
            }
            else {
                while (count < position - 1) {
                    temp = temp.next;
                    count++;
                }
                let current = temp.next;
                current.next = current.next.next;
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
    /**
     * delete last node of linekd list
     */
    deleteLast() {
        try {
            if (this.isEmpty()) {
                throw 'you should not delete node from empty linked list';
            }
            let temp = this.HEAD;
            let secondLastNode = this.HEAD;
            while (temp.next != null) {
                secondLastNode = temp;
                temp = temp.next;
            }
            if (temp == this.HEAD) {
                this.HEAD = null;
            }
            else {
                secondLastNode.next = null;
            }

            return 'success';
        } catch (e) {
            return e;
        }
    }
    /**
     * display the node linked list
     */
    display() {
        try {
            if (this.isEmpty()) {
                throw 'list should not be empty';
            }
            let temp = this.HEAD.next;
            while (temp != null) {
                process.stdout.write(`${temp.data} `);
                temp = temp.next;
            }
            return "success";
        }
        catch (e) {
            return e;
        }
    }
    /**
     * 
     * @param {*} data specify element to search into linked list 
     */
    index(data) {
        try {
            let regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(data))
                throw 'data to search should not contain special symbol';
            if (data == 'undefined')
                throw 'data to search should not be undefined';

            let index = -1
            let count = 0;
            let temp = this.HEAD;
            while (temp != null) {
                if (temp.data == data) {
                    index = count;
                    break;
                }
                count++;
                temp = temp.next;
            }
            return index;
        } catch (e) {
            return e;
        }
    }
    /**
     * iterate linked list collect nodedata separated by comma
     */
    getString() {
        try {
            let content = "";
            if (this.HEAD == null) {
                content = "";
            }
            else {
                let temp = this.HEAD.next;
                while (temp != null) {
                    content = content + temp.data + ",";
                    temp = temp.next;
                }
            }
            return content;
        } catch (e) {
            return e
        }
    }
    /**
     * sort the linked list node by selection sort
     */
    sortList() {
        let temp = this.HEAD;
        for (let i = temp; i.next != null; i = i.next) {
            for (let j = i.next; j != null; j = j.next) {
                if (parseInt(i.data) > parseInt(j.data)) {
                    let temp = i.data;
                    i.data = j.data;
                    j.data = temp;
                }
            }
        }
    }
    /**
     * insert into sorted list
     */
    insertToSortedList(node) {
        let current = this.HEAD;
        let previous = this.HEAD;
        let next = this.HEAD.next;

        while (current != null) {
            if (current.data > node.data)
                break;

            previous = current;
            current = current.next;
            // next = next.next;
        }
        if(current==null)
        {
            previous.next=node;
        }
        else{
            previous.next = node;
            node.next = current;
        }
    }
}

module.exports = { Node, LinkList, DayNode }