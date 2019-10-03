const assert=require('chai').assert;
const linkedlist=require("../Utility/LinkedList");

describe("test case for linked list display operation",function(){
    let listObj =new linkedlist.LinkList();
    let tc1=listObj.display();
    it("list should not be empty",function(){
        assert.equal(tc1,"list should not be empty");
    });

    let listObj4=new linkedlist.LinkList()
    let node4=new linkedlist.Node('sangita4',null);
    listObj4.insertAtEnd(node4);

    let tc4=listObj4.display();
    it("successfully display a linked list",function(){
        assert.equal(tc4,"success");
    });
});

describe("test case insert at beginning operation of linked list",function(){
    let listObj1=new linkedlist.LinkList();
    let node1=new linkedlist.Node('undefined',null);
    let tc1=listObj1.insertFirst(node1);
    it("linked list data should not be undefined",function(){
        assert.equal(tc1,"linked list data should not be undefined");
    });

    let listObj2=new linkedlist.LinkList();
    let node2=new linkedlist.Node(' ',null);
    let tc2=listObj2.insertFirst(node2);
    it("linked list node data should not contain special symbol",function(){
        assert.equal(tc2,"linked list node data should not contain special symbol");
    });

    let listObj3=new linkedlist.LinkList();
    let node3=new linkedlist.Node('sangita',null);
    let tc3=listObj3.insertFirst(node3);
    it("successfully inserted node in the beginning",function(){
        assert.equal(tc3,"success");
    });
});

describe("test case insert at specific position operation of the linked list",function(){
    let listObj1=new linkedlist.LinkList();
    let node1=new linkedlist.Node('undefined',null);
    let tc1=listObj1.insertFirst(node1);
    it("linked list data should not be undefined",function(){
        assert.equal(tc1,"linked list data should not be undefined");
    });

    let listObj2=new linkedlist.LinkList();
    let node2=new linkedlist.Node(' ',null);
    let tc2=listObj2.insertFirst(node2);
    it("linked list node data should not contain special symbol",function(){
        assert.equal(tc2,"linked list node data should not contain special symbol");
    });

    let listObj3=new linkedlist.LinkList();
    let node3=new linkedlist.Node('sangita',null);
    let tc3=listObj3.insertFirst(node3);
    it("successfully inserted node in the beginning",function(){
        assert.equal(tc3,"success");
    });
});

describe("test case insert at end of linekd list operation",function(){
    let listObj1=new linkedlist.LinkList();
    let node1=new linkedlist.Node('undefined',null);
    let tc1=listObj1.insertFirst(node1);
    it("linked list data should not be undefined",function(){
        assert.equal(tc1,"linked list data should not be undefined");
    });

    let listObj2=new linkedlist.LinkList();
    let node2=new linkedlist.Node(' ',null);
    let tc2=listObj2.insertFirst(node2);
    it("linked list node data should not contain special symbol",function(){
        assert.equal(tc2,"linked list node data should not contain special symbol");
    });

    let listObj3=new linkedlist.LinkList();
    let node3=new linkedlist.Node('sangita',null);
    let tc3=listObj3.insertFirst(node3);
    it("successfully inserted node in the beginning",function(){
        assert.equal(tc3,"success");
    });
});

describe("test case delete first node from linked list",function(){
    let listObj1=new linkedlist.LinkList();
    let tc1=listObj1.deleteFirst();
    it("you should not delete node from empty linked list",function(){
        assert.equal(tc1,"you should not delete node from empty linked list");
    });

    let listObj2=new linkedlist.LinkList();
    let node2=new linkedlist.Node('sangita',null);
    listObj2.insertFirst(node2);
    let node3=new linkedlist.Node('sangita',null);
    listObj2.insertFirst(node3);
    let tc2=listObj2.deleteFirst();
    it("successfully delete first node from linked list",function(){
        assert.equal(tc2,"success");
    });
});

describe("test case for delete node at specific position operation of linked list",function(){
    let listObj =new linkedlist.LinkList();
    let tc1=listObj.deleteAt(4);
    it("you should not delete node from empty linked list",function(){
        assert.equal(tc1,"you should not delete node from empty linked list");
    });

    let listObj2=new linkedlist.LinkList()
    let node2=new linkedlist.Node('sangita4',null);
    listObj2.insertFirst(node2);
    let tc2= listObj2.deleteAt(0);
    it("you should not delete zeroth position node",function(){
        assert.equal(tc2,"you should not delete zeroth position node");
    });

   
    let listObj3=new linkedlist.LinkList()
    let node3=new linkedlist.Node('sangita4',null);
    listObj3.insertFirst(node3);
    let node4=new linkedlist.Node('sangita4',null);
    listObj3.insertFirst(node4);
    let tc3= listObj3.deleteAt(3);
    it("you should not delete node greater than size of linked list",function(){
        assert.equal(tc3,"you should not delete node greater than size of linked list");
    });

    let listObj4=new linkedlist.LinkList()
    let node5=new linkedlist.Node('sangita4',null);
    listObj4.insertFirst(node4);
    let node6=new linkedlist.Node('sangita4',null);
    listObj4.insertFirst(node6);
    let tc4= listObj4.deleteAt(2);
    it("successfully deleted node at specific position from linked list",function(){
        assert.equal(tc4,"success");
    });
});

describe("test case for delete last node from linked list operation",function(){
    let listObj =new linkedlist.LinkList();
    let tc1=listObj.deleteLast();
    it("you should not delete node from empty linked list",function(){
        assert.equal(tc1,"you should not delete node from empty linked list");
    });

    let listObj2=new linkedlist.LinkList()
    let node1=new linkedlist.Node('sangita4',null);
    listObj2.insertFirst(node1);
    let node2=new linkedlist.Node('sangita4',null);
    listObj2.insertFirst(node2);
    let tc2= listObj2.deleteLast();

    it("successfully deleted last node from linked list",function(){
        assert.equal(tc2,"success");
    });
});

describe("test case for searchine element in linked list",function(){
    let listObj1=new linkedlist.LinkList();
    let node1=new linkedlist.Node('sangita',null);
    listObj1.insertFirst(node1);
    let node2=new linkedlist.Node('sangitaawaghad',null);
    listObj1.insertFirst(node2);
    let tc1=listObj1.index('undefined');
    it("data to search should not be undefined",function(){
        assert.equal(tc1,"data to search should not be undefined");
    });

    let listObj2=new linkedlist.LinkList();
    let node3=new linkedlist.Node('sangita',null);
    listObj2.insertFirst(node3);
    let node4=new linkedlist.Node('sangitaawaghad',null);
    listObj2.insertFirst(node4);
    let tc2=listObj2.index(' ');
    it("data to search should not contain special symbol",function(){
        assert.equal(tc2,"data to search should not contain special symbol");
    });

    let listObj3=new linkedlist.LinkList();
    let node5=new linkedlist.Node('abc',null);
    listObj3.insertFirst(node5);
    let node6=new linkedlist.Node('xyz',null);
    listObj3.insertFirst(node6);
    let tc3=listObj3.index('pqr');
    it("successfully search node in linked list ",function(){
        assert.equal(typeof tc3,'number');
    });
});

describe("test case for getting node data in concated string format",function(){
    let listObj2=new linkedlist.LinkList();
    let node2=new linkedlist.Node('xyz',null);
    listObj2.insertFirst(node2);
    let node3=new linkedlist.Node('pqr',null);
    listObj2.insertFirst(node3);
    let tc2=listObj2.getString();
    it("successfully get node data in concated string format",function(){
        assert.notEqual(tc2,"you should not concat node data from empty linked list");
    });

});