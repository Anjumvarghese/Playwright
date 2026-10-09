let msg1:string="Hello";
console.log(msg1);
//msg1=2;
//console.log(msg1);
let age1:number=20;
console.log(age1);
let isInActive:boolean=false;
console.log(isInActive);
let numberArray:number[]=[1,2,3];
console.log(numberArray);
let data:any="Hello";
console.log(data);
data=42;
console.log(data);

function add1(a:number,b:number):number{
    return a+b;
}
console.log(add1(3,4));
//console.log(add1(3,"4"));   // gives error because the datattype is number amd cannot be converted to string

//objects
let user1:{name:string,age:number}={
    name:"Bob",
    age:34
}
/*user.location:{location:string}={     //cannot add a new elemnt to object like in JS.
    location:"USA"
}&*/
console.log(user1);