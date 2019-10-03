
class Person {  
    private id:number;
     private firstName: string;  
     private lastName: string;
     private address:{"address":string,"city":string,"state":string,"zip":number};
     private phone:number;
  
    constructor() {  
            this.id=0;
            this.firstName="";
            this.lastName="";
            this.address={"address":"","city":"","state":"","zip":0};
            this.phone=0;
    }  
    get getId():number{
        return this.id;
    }
    set setId(id:number){
        this.id=id;
    }
  
    get getFirstName() : string {  
        return this.firstName ;  
    }  
    set setFirstName(fname:string){
        this.firstName=fname;
    }
    get getLastName():string{
        return this.lastName;
    }
    set setLastName(lname:string){
        this.lastName=lname;
    }
    get  getAddress():{"address":any,"city":any,"state":any,"zip":number}{
        return this.address;
    }
    set setAddress(address:{"address":any,"city":any,"state":any,"zip":number}){
        this.address=address;
    }
    get getPhone():number{
        return this.phone;
    }
    set setPhone(ph:number){
        this.phone=ph;
    }
}  
export{Person};
/**
 * class Name{
    private _name: string;

    getMethod(): string{
        return this._name;
    }

    setMethod(value: string){
        this._name = value
    }

    get getMethod1(): string{
        return this._name;
    }

    set setMethod1(value: string){
        this._name = value
    }
}

class HelloWorld {

    public static main(){

        let test = new Name();

        test.setMethod('test.getMethod() --- need ()');
            console.log(test.getMethod());

        test.setMethod1 = 'test.getMethod1 --- no need (), and used = for set ';
            console.log(test.getMethod1);
    }
}
tsc --target es5
 */