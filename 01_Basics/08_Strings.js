// console.log("hello" + "world");

const name ="hitesh"
const repoCount =50

console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Hitesh-hc')
console.log(gameName);

console.log(gameName[0]);


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherSlice = gameName.slice(-8,4)
console.log(anotherSlice);



// Trim remove the unwanted space
const newStringOne = "   hitesh     "
console.log(newStringOne.trim());


// REPLACE
const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20","-"))

console.log(url.includes('hitesh'));
