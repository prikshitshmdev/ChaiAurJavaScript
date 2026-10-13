// Primitive DataTypes
// call by value , copy milti

// 7 types

// String , Number , Boolean , null , undefined , Symbol, BigInt

// Reference (Non-Primtive) memory milti
// Array , Objects , functions

const score =100
const scoreValue =100.3
const isLoggedIn= false
const outsideTemp = null
let userEmail;


const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const bigNumber =653241431243243243n
console.log(bigNumber);


const heros =["shaktiman", "nagraaj","doga"]

const myObj={
    name:"Hitesh",
    age:22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(
 myFunction)

 console.log(typeof outsideTemp);
 console.log(typeof myFunction); // function
 
 