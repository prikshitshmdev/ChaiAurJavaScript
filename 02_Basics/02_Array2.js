const marvel_heros=["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]


// PUSH METHOD
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // Array ke andr Array
// console.log(marvel_heros[3][1]);


//CONCAT METHOD = returns new array

const allHeros= marvel_heros.concat(dc_heros)
// console.log(allHeros);


// SPREAD OPERATOR
const all_newHeros = [...marvel_heros,...dc_heros]
// console.log(all_newHeros);


//FLAT = sbko ek array me dedo
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// ISARRAY
console.log(Array.isArray("Bawa")); // false
console.log(Array.from("hitesh")); // [ 'h', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"hitesh"})); // btana pdta key , ya value ka array bnao


// diff values se array bnana
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
