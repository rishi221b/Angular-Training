import { Person, Json } from "./interfaceDemo";
   function getFullName(person:Person){
       return `${person. fname} ${person.lname}`
   }
   let sumit= {fname: 'sumit', lname: 'joshi'};
  console.log(getFullName (sumit));

   class Employee implements Json
   {
       constructor(private fname:string , private lname:string){}
       toJSON(): string {
            return JSON.stringify({firstName:this.fname,
            lastName:this.lname});
       }
    }
                                                 
   const obj=new Employee("anuj", "singh");
  console.log(obj.toJSON());
