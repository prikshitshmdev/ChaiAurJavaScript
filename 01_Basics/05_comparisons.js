// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(1!=0);



console.log("2" > 1);// true
console.log("02">=2); //true

console.log(null>0); // false
console.log(null ==0);//false
console.log(null<=0);//true

// equality check (==) & comparsions > < >= <= work differently
// comparisons convert null to a number , treating it as 0
// thats why null>=0 is true , null >0 =false


console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<=0);
// Undefined always give false



console.log("2" == 2); // true
console.log("2" ===2); // false
// === checks datatype too

