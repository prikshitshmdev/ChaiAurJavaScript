// ++++++++++++ DATES +++++++++++++
console.log(Date);


let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof myDate);


let myCreateDate = new Date(2026,0,8)
console.log(myCreateDate.toLocaleDateString());


console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());



