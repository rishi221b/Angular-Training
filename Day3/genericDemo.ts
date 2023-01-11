function mydata<t>(par:t[]):t[]{
    return new Array<t>().concat(par);
}
 let res1=mydata<string>(['Rishi', "Patil", "Messi"]);
 let res2=mydata<number>([2,3,4,5,6]);
console.log(res1);
console.log(res2);
