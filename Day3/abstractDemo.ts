abstract class Employee{
    constructor (private fname:string, private lname:string){}
    get fullName ():string
    {
         return `${this.fname} ${this.lname}`;
    }
    abstract getSalary():number;
    mainMethod():string{
         return `${this. fullName} got ${this.getSalary()} per month`
    }
}
class Neosoft extends Employee{
    constructor(fname:string, lname:string, private salary:number){
        super(fname, lname)
     }
    getSalary(): number{
      return this.salary;
    }
}
const obj3 = new Neosoft("Rishi", "Patil", 30000);
obj3.mainMethod();
