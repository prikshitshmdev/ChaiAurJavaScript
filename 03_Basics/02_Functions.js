function calculateCartPrice(val1,val2,...num1){ // rest operator
return num1 // [ 500, 2000 ] , val1 200 , val2 400
}

console.log(calculateCartPrice(200,400,500,2000));


const user ={
    username:"hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    username:"Prikshit",
    price:999
})

// Passing array

const myNewArray =[200,300,400,600]

function returnSecondValue(getArray){
return getArray[1]
}

console.log(
 returnSecondValue(myNewArray))

console.log(
 returnSecondValue([100,200,300]))
