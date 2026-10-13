# JavaScript Arrays — Notes & Practice

## 1. What is an Array?

An array stores multiple values in a single variable.

```js
const heroes = ["Thor", "Ironman", "Spiderman"];

console.log(heroes[0]); // Thor
console.log(heroes[1]); // Ironman
```

* Array indexing starts from `0`.
* Arrays can store strings, numbers, booleans and other arrays.
* JavaScript arrays are resizable.
* Arrays are objects in JavaScript.

## 2. Creating Arrays

```js
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.of(10, 20, 30);
```

### `Array.isArray()`

Checks whether a value is an array.

```js
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray("hello")); // false
```

### `Array.from()`

Creates an array from an iterable or array-like object.

```js
console.log(Array.from("hitesh"));
// ["h", "i", "t", "e", "s", "h"]

console.log(Array.from({ length: 3 }, (_, i) => i + 1));
// [1, 2, 3]
```

A plain object such as `{ name: "Hitesh" }` is not iterable by default, so `Array.from()` returns an empty array for it.

```js
const user = { name: "Hitesh", age: 25 };

console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Hitesh", 25]
console.log(Object.entries(user));// [["name", "Hitesh"], ["age", 25]]
```

## 3. Adding and Removing Elements

### `push()` — Add at the end

```js
const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]
```

Changes the original array and returns its new length.

### `pop()` — Remove from the end

```js
const numbers = [1, 2, 3];
const removed = numbers.pop();

console.log(removed); // 3
console.log(numbers); // [1, 2]
```

Changes the original array and returns the removed element.

### `unshift()` — Add at the beginning

```js
const numbers = [2, 3];
numbers.unshift(1);

console.log(numbers); // [1, 2, 3]
```

Changes the original array and returns its new length.

### `shift()` — Remove from the beginning

```js
const numbers = [1, 2, 3];
const removed = numbers.shift();

console.log(removed); // 1
console.log(numbers); // [2, 3]
```

Changes the original array and returns the removed element.

## 4. Combining Arrays

### `push()`

```js
const marvel = ["Thor", "Ironman"];
const dc = ["Batman", "Superman"];

marvel.push(dc);

console.log(marvel);
// ["Thor", "Ironman", ["Batman", "Superman"]]
```

`push()` adds the entire `dc` array as one element.

### `concat()`

```js
const marvel = ["Thor", "Ironman"];
const dc = ["Batman", "Superman"];

const heroes = marvel.concat(dc);

console.log(heroes);
// ["Thor", "Ironman", "Batman", "Superman"]
```

Returns a new array without modifying the original arrays.

### Spread operator (`...`)

```js
const heroes = [...marvel, ...dc];

console.log(heroes);
```

A convenient way to combine arrays or create shallow copies.

## 5. Flattening Arrays — `flat()`

Removes nested array levels up to the specified depth.

```js
const nested = [1, 2, [3, 4, [5, 6]]];

console.log(nested.flat(1));
// [1, 2, 3, 4, [5, 6]]

console.log(nested.flat(Infinity));
// [1, 2, 3, 4, 5, 6]
```

`flat()` returns a new array and does not modify the original array.

## 6. Searching Arrays

### `includes()`

Checks whether an element exists.

```js
const heroes = ["Thor", "Batman"];

console.log(heroes.includes("Thor")); // true
console.log(heroes.includes("Flash")); // false
```

Returns a boolean.

### `indexOf()`

Returns the first matching index, or `-1` if the element is absent.

```js
const numbers = [10, 20, 30];

console.log(numbers.indexOf(20)); // 1
console.log(numbers.indexOf(50)); // -1
```

## 7. Converting an Array to a String — `join()`

Joins array elements into a string.

```js
const words = ["Learn", "JavaScript", "today"];

console.log(words.join(" ")); // Learn JavaScript today
console.log(words.join("-")); // Learn-JavaScript-today
console.log(typeof words.join()); // string
```

The original array remains unchanged. The default separator is a comma.

## 8. `slice()` vs `splice()`

### `slice(start, end)`

* Returns a shallow copy of the selected range.
* The end index is excluded.
* Does not modify the original array.

```js
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 3);

console.log(result);  // [20, 30]
console.log(numbers); // [10, 20, 30, 40, 50]
```

### `splice(start, deleteCount)`

* Removes elements from the original array.
* Returns the removed elements.
* The `deleteCount` specifies how many elements to remove.

```js
const numbers = [10, 20, 30, 40, 50];

const removed = numbers.splice(1, 3);

console.log(removed); // [20, 30, 40]
console.log(numbers); // [10, 50]
```

`splice()` can also insert or replace elements.

```js
const numbers = [10, 20, 30];

numbers.splice(1, 1, 99);

console.log(numbers); // [10, 99, 30]
```

## 9. Shallow Copies and References

Arrays are objects. Assigning an array to another variable does not create a separate array.

```js
const original = [1, 2, 3];
const reference = original;

reference.push(4);

console.log(original); // [1, 2, 3, 4]
```

A shallow copy creates a new outer array:

```js
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]
```

**Important:** Shallow copies still share nested objects or arrays.

## 10. Quick Revision Table

| Method            | Purpose                                     | Changes original? |
| ----------------- | ------------------------------------------- | ----------------- |
| `push()`          | Add at end                                  | Yes               |
| `pop()`           | Remove from end                             | Yes               |
| `unshift()`       | Add at beginning                            | Yes               |
| `shift()`         | Remove from beginning                       | Yes               |
| `concat()`        | Combine arrays                              | No                |
| `flat()`          | Flatten nested arrays                       | No                |
| `includes()`      | Check existence                             | No                |
| `indexOf()`       | Find index                                  | No                |
| `join()`          | Convert elements to string                  | No                |
| `slice()`         | Extract a range                             | No                |
| `splice()`        | Remove, insert or replace                   | Yes               |
| `Array.from()`    | Create array from iterable/array-like input | Creates new array |
| `Array.isArray()` | Check if value is an array                  | No                |
| `Array.of()`      | Create array from arguments                 | Creates new array |

## Practice Rule

For each method, practise three things:

1. Predict the output before running the code.
2. Check whether the original array changes.
3. Explain the result in your own words.
