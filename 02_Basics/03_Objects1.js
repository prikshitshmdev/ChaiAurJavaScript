// literal and constructor

// singelton bnta constructor  // Object.create()
// literal se singelton ni bnta


// Object Literals

// Declaring symbol
const mySym =Symbol("key1")

const JsUser ={
name:"Prikshit",
"full name":"Prikshit Sharma",
// using symbol as key use []
[mySym]:"mykey1",
age:18,
location:"Jaipur",
email:"prikshit@google.com",
isLoggedIn: false,
lastLogInDays:["Monday","Saturday"]
}

console.log((JsUser.email))
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
console.log( JsUser[mySym]);


JsUser.email="prikshitshm@chatgpt.com"
// Object.freeze(JsUser)


console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JSUSER");
    
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS USER ${this.name}`);
    
}
console.log(JsUser.greeting); // function ka refernce only , not execute

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());
