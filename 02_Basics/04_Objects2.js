// Object by Constructor

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);



const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


// combing objects
const obj1 ={
1:"a",
2:"b",
}

const obj2={3:"a",4:"b"}

// const obj3 ={obj1,obj2}
// console.log(obj3);

/* onst obj3 =Object.assign({},obj1,obj2)
console.log(obj3);
 */

const obj3 ={...obj1,...obj2}
console.log(obj3);



// databases se values

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

console.log(
 users[1].email)



 console.log(tinderUser);
 

 console.log(Object.keys(tinderUser)); // gives array of keys
 console.log(Object.values(tinderUser));
 