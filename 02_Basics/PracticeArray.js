const arrayOfLanguages = ["python","RubyOnRails","C++","C","Java"]
console.log(arrayOfLanguages[0]);
console.log(arrayOfLanguages[4]);

arrayOfLanguages.push("javascript")
arrayOfLanguages.pop()
console.log(arrayOfLanguages);


arrayOfLanguages.unshift("Python")
arrayOfLanguages.shift()
console.log(arrayOfLanguages);


console.log(arrayOfLanguages.includes("Nodejs"));
console.log(arrayOfLanguages.includes("Batman"));




const arr1=["1","2","3"]
const arr2 =["a","b","c"]

const newArray = arr1.concat(arr2)
console.log(newArray);

console.log(arr1);
console.log(arr2);


const anotherNewArray = [...arr1,...arr2,...newArray]
console.log(anotherNewArray);


const flattendArray = [1, [2, 3], [4, [5, 6]]]
console.log(flattendArray.flat(Infinity));


