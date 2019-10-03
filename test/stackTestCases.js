const assert=require('chai').assert;
const stackUtility=require('../Utility/Stack');

describe("test cases push operation of stack",function(){
    let stackObj3=new stackUtility.Stack();
    for(let i=0;i<100;i++)
    {
        stackObj3.push(i);
    }
    let tc3=stackObj3.push(11);
    it("data should not pushed if stack overflow ",function(){
        assert.equal(tc3,"stack overflow");
    });

    let stackObj4=new stackUtility.Stack();
    let tc4=stackObj4.push(23);
    it("successfullu pushed data into stack",function(){
        assert.equal(tc4,"success");
    });
});

describe("test cases pop operation of stack",function(){
    let stackObj1=new stackUtility.Stack();
    let tc1=stackObj1.pop();
    it("you should not remove from empty stack",function(){
        assert.equal(tc1,"you should not remove from empty stack");
    });

    let stackObj2=new stackUtility.Stack();
    stackObj2.push(23);
    stackObj2.push(24);
    let tc2=stackObj2.pop()
    it("successfullu poped data from stack",function(){
        assert.notEqual(tc2,"you should not remove from empty stack");
    });
});

describe("test cases peek operation of stack",function(){
    let stackObj1=new stackUtility.Stack();
    let tc1=stackObj1.peek();
    it("you should not peek top element of stack if stack is empty",function(){
        assert.equal(tc1,"you should not peek top element of stack if stack is empty");
    });

    let stackObj2=new stackUtility.Stack();
    stackObj2.push(23);
    stackObj2.push(24);
    let tc2=stackObj2.peek()
    it("successfullu poped data from stack",function(){
        assert.notEqual(tc2,"you should not peek top element of stack if stack is empty");
    });
});

describe("test cases display element in stack",function(){
    let stackObj1=new stackUtility.Stack();
    let tc1=stackObj1.display();
    it("you should not display element of stack if stack is empty",function(){
        assert.equal(tc1,"you should not display element of stack if stack is empty");
    });

    let stackObj2=new stackUtility.Stack();
    stackObj2.push(23);
    stackObj2.push(24);
    let tc2=stackObj2.peek()
    it("successfullu display element of stack",function(){
        assert.notEqual(tc2,"success");
    });
});