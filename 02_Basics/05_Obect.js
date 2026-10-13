const course = {
    coursename :"JS in Hindi",
    price:"999",
    courseInstuctor:"Hitesh"
}

// Ojbect destructure
const {courseInstuctor:Instructor} = course
console.log(Instructor);




// {
//     "name":"Hitesh",
//     "coursename":"Js in hindi",
//     "price":"Free"
// }