const height=Symbol();
const weight=Symbol();
class Rectangle{
    get Height()
    {
        return this[height];
    }
    set Height(ht)
    {
        this[height]=ht;
    }
    get Weight()
    {
        return this[weight];
    }
    set Weight(wt)
    {
        this[weight]=wt;
    }
    getArea()
    {
        return this.getHeight()*this.getWeight();
    }
}
 main=()=>{
     let classObj=new Rectangle();
     classObj.setHeight(5);
     classObj.setWeight(10);
     console.log(`Height : ${classObj.getHeight()}`);
     console.log(`Weight : ${classObj.getWeight()}`);
     console.log(`Area of Reactangle is ${classObj.getArea()}`);
     classObj.setHeight(500);
     console.log(classObj.getHeight());
 }
 module.exports=main();