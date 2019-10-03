const assert=require('chai').assert;
const queueUtility=require('../Utility/Queue');

describe("test cases for enqueue operation of queue",function(){
    let queueObj1=new queueUtility.Queue();
    let tc1=queueObj1.enqueue('@');
    it("data to be added should not contain special symbol",function(){
        assert.equal(tc1,"data to be added should not contain special symbol");
    });
    let queueObj2=new queueUtility.Queue();
    let tc2=queueObj2.enqueue('undefined');
    it("data to be added should not be undefined",function(){
        assert.equal(tc2,"data to be added should not be undefined");
    });
    let queueObj3=new queueUtility.Queue();
    let tc3=queueObj3.enqueue(null);
    it("data to be added should not be null",function(){
        assert.equal(tc3,"data to be added should not be null");
    });

    let queueObj4=new queueUtility.Queue();
    for(let i=0;i<100;i++)
    {
        queueObj4.enqueue(i);
    }
    let tc4=queueObj4.enqueue(1000);
    it("you should not into fulll queue",function(){
        assert.equal(tc4,"you should not into fulll queue");
    });
    let queueObj5=new queueUtility.Queue();
    let tc5=queueObj5.enqueue('abc');
    it("successfully added data into queue",function(){
        assert.equal(tc5,"success");
    });
});

describe("test cases for dequeue operation of queue",function(){
    let queueObj1=new queueUtility.Queue();
    let tc1=queueObj1.dequeue();
    it("you should not remove item from empty queue",function(){
        assert.equal(tc1,"you should not remove item from empty queue");
    });
    
    let queueObj2=new queueUtility.Queue();
    for(let i=0;i<5;i++)
    {
        queueObj2.enqueue(i);
    }
    let tc2=queueObj2.dequeue();
    it("successfully remove item from queue",function(){
        assert.notEqual(tc2,"you should not remove item from empty queue");
    });
});

describe("test cases for display operation of queue",function(){
    let queueObj1=new queueUtility.Queue();
    let tc1=queueObj1.display();
    it("you should not display empty queue",function(){
        assert.equal(tc1,"you should not display empty queue");
    });
    
    let queueObj2=new queueUtility.Queue();
    for(let i=0;i<5;i++)
    {
        queueObj2.enqueue(i);
    }
    let tc2=queueObj2.display();
    it("successfully display item of the queue",function(){
        assert.equal(tc2,"success");
    });
});

describe("test cases size operation of queue",function(){
    let queueObj1=new queueUtility.Queue();
    let tc1=queueObj1.size();
    it("you should not find size of empty queue",function(){
        assert.equal(tc1,"you should not find size of empty queue");
    });
    
    let queueObj2=new queueUtility.Queue();
    for(let i=0;i<5;i++)
    {
        queueObj2.enqueue(i);
    }
    let tc2=queueObj2.size();
    it("successfully count size of the queue",function(){
        assert.equal(typeof tc2,'number');
    });
});

describe("test cases get last element of the queue",function(){
    let queueObj2=new queueUtility.Queue();
    for(let i=0;i<5;i++)
    {
        queueObj2.enqueue(i);
    }
    let tc2=queueObj2.getLastItem();
    it("successfully get last element of the queue",function(){
        assert.notEqual(tc2,'you can not get last element of empty queue');
    });
});