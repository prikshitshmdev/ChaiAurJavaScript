// Arrays
const myArr = [0,1,2,3,4,5,true,"hitesh"]

//RESIZABLE , MIX DATA-TYPES ,shallow copy copy share the same reference type


console.log(myArr[0]);

const myHeros=["Shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr2[1]);

//ARRAY METHODS

// 1 PUSH
myArr.push(6)
myArr.push(7)

// 2 POP
myArr.pop()
console.log(myArr);


// 3 UPSHIFT => ADDS AT ARRAY START
myArr.unshift(9)
console.log(myArr);

// SHIFT => removes from start of array
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1


//JOIN => join the elem into string ,string me convert + BIND
const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);


// SLICE , SPLICE

// SLICE => DOESNT CHANGE ORIGINAL DATA
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("A ", myArr);


// SPLICE = LAST RANGE BI INCLUDE HOTI , + ORIGINAL ARRAY BI CHANGE HOTA , NIKAL DETA US RANGE KO ORIGINAL ARRAY SE


const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("B", myArr);



const newArr1= ["Prikshit","Is","Learning","JS"]
console.log(newArr1.join());


const sliceArray = [10,20,30,40,50]
 console.log(sliceArray.slice(1,4));
 

 console.log(sliceArray.splice(1,2));

 console.log(sliceArray);
 
 