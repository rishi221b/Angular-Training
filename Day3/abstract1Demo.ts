import {Employee} from './abstractDemo';
class Neosoft extends Employee{
     constructor (fname: string, lname: string, private salary: number){
        super(fname,lname)
     }
    getSalary(): number{
      return this.salary;
    }
}
const obj4  = new Neosoft("anuj", "singh" ,78000);
console.log(obj4.mainMethod());