

// Function Defintion
function sayMyName(){
    console.log("Prikshit Sharma");
}

// sayMyName // func reference

sayMyName() // Func execution


function addTwoNumbers(number1 , number2){ // parameter
    /* console.log(number1 + number2) */
    let result = number1 + number2
    return result
    console.log("Bawa"); // unreachable code
}

const result =addTwoNumbers(3,4) // arguments
// console.log("Results :",result);


function logInUser(username){
    if(!username){
    console.log("Please enter a user name");
    return
    }
    return `${username} Just Logged In`
}

console.log(logInUser())



console.log(logInUser("Prikshit"));



