class Person{
    private personid:number;
    private personname:string;
    private balance:number;
    private noofshares=new Array();

    get getPersonid():number{
        return this.personid;
    }
    set setPersonid(id:number){
        this.personid=id;
    }
    get getPersonname():string{
        return this.personname;
    }
    set setPersonname(name:string){
        this.personname=name;
    }
    get getBalance():number{
        return this.balance;
    }
    set setBalance(balance:number)
    {
        this.balance=balance;
    }
    get getNoofshares():any[]{
        return this.noofshares;
    }
    set setNoofshares(no:[]){
        this.noofshares=no;
    }
}
export{Person}