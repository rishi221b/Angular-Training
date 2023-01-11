class Car
{
    public speed:number;
    constructor(){
        this. speed=50;

    }
    acc():number{
         return this.speed+=70;
    }
    checkSpeed():void{
        console. log(`The speed of car is ${this.speed}`);
    }
}
const obj=new Car();
obj.checkSpeed();
obj.acc();
obj.checkSpeed();
