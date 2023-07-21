//the map() the filter () and the reduce ()

/*
In simple words, the difference between array.map() and map() is:

array.map() is a method specifically available on arrays in JavaScript.
It transforms each element of an array and returns a new array with the transformed values.

map() alone refers to the Map object in JavaScript, 
which is a built-in data structure used to store key-value pairs.
It allows you to easily access or modify stored items based on their keys.
In summary, array.map() is used to transform array elements,
 while map() refers to the Map object for key-value storage.


const myMap = new Map();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

console.log(myMap.get('key2')); // Output: value2



In this example, map() refers to the Map object. We create a new Map called myMap 
and use the set() method to add key-value pairs. 
Then, we use the get() method to retrieve the value associated with the 
key 'key2' from the map.



const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
In this example, array.map() is used. We have an array called numbers, and we apply the map() method to transform each element by squaring it. The transformed values are collected into a new array called squaredNumbers, which is then logged to the console.

To summarize:

map() on its own refers to the Map object used for key-value storage.
array.map() is a method available on arrays, 
used to transform array elements and create a new array with the transformed values.*/
/*



reduce() is used to perform a calculation or aggregation on the elements of an array 
and return a single value.
filter() is used to create a new array containing only the elements that meet a specified condition.
Both methods (reduce() and filter()) are powerful tools in JavaScript for working with arrays, enabling you to perform various operations and
 manipulate array data in a concise manner.*/

//this is a tutorial of es6 the topics are template literals and etc//

/*let word1 = "sam";
let word2 = "windflower";

//const fullname = `${word1} ${word2}`; first example

//let example = "Hello \n" + "world";an example for new line character that can be alternated with the help of template literals
let example = `${word1}
${word2}`;//easy way for multiple string
console.log(example);
document.getElementById("example").innerHTML = example;*/

// Destructing object

/*const personalInformation = {
  firstName: "Raya",
  lastName: "Benja",
  address: "Kumandra",
  zipCode: 986787,
};

//console.log(personalInformation.firstName); //we were accessing the values using .dot operator
//And hence when we use de-structuring of object makes use of short hand

const { firstName: fn, lastName: ln, address: ad } = personalInformation; //short hand property
console.log(`${fn} ${ln} ${ad}`);*/ //renaming convention for de-structure

/*Destructure of array :Destructuring is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a concise and convenient manner. 
It provides a way to "destructure" complex data structures into individual variables,
 making it easier to work with their values.*/
/*const fruits = ["apple", "banana", "orange"];

// Destructuring assignment
const [firstFruit, secondFruit, thirdFruit] = fruits; //passing an array to a variable

console.log(firstFruit); // Output: apple
console.log(secondFruit); // Output: banana
console.log(thirdFruit); // Output: orange

//example 2:

const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment with default value and ignored element
const [firstNumber, , thirdNumber, fourthNumber = 0] = numbers;

console.log(firstNumber); // Output: 1
console.log(thirdNumber); // Output: 3
console.log(fourthNumber); // Output: 4 (assigned default value)*/

//Object literals
/*const person = {
  name: "John",
  age: 30,
  city: "New York",
};*/
/*console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  greet: function() {
    console.log('Hello!');
  }
};

person.greet(); // Output: Hello!*/
// challenge 1:

/*function addressMaker(address) {
  const { city, state } = address; //refactor using object literals
  const newAddress = {
    //using de-structuring
    city,
    state,
    country: "India",
  };
  console.log(`${newAddress.city},${newAddress.state},${newAddress.country}`); //using templates
}
addressMaker({ city: "bangalore", state: "karnataka" });*/

//for of loop
/*The for...of loop is a loop construct introduced in ES6 (ECMAScript 2015) that
 provides an easy way to iterate over elements of an iterable object, such as an array, 
 string, or certain built-in objects. It simplifies the process of looping and accessing
  the elements of the collection.
  syntax:--
  for (variable of iterable) {
  // Code to be executed for each iteration
}
The for...of loop provides a cleaner and more concise syntax compared to traditional loops like for or forEach. It is particularly useful when you need to iterate over the elements of an iterable object and perform operations on them, without explicitly 
managing indexes or keeping track of the loop counter.
  */

/*let incomes = [5000, 7000, 9000];
let total = 0;
for (const income of incomes) {
  total += incomes;
}
console.log(incomes);
*/



/*spread operator :The spread operator is versatile and can be used in various scenarios 
to conveniently work with arrays, strings, and objects in JavaScript. 
It provides a concise way to combine, clone, or extract values from these data structures.

The spread operator is denoted by three dots (...) followed by the iterable or object you want to spread. Here are a few examples to 
illustrate its usage:*/
/*const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]*/

/*Spreading characters of a string into an array:

const str = 'Hello';
const chars = [...str];

console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']*/

/*Merging objects using spread operator:

const obj1 = { name: 'John', age: 30 };
const obj2 = { city: 'New York', country: 'USA' };
const mergedObj = { ...obj1, ...obj2 };*/

/*Passing arguments to a function:
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); // Output: 6*/

/*  The rest operator is another feature introduced in ES6 (ECMAScript 2015) that works in a similar way to the spread operator (...). However, while the spread operator expands or spreads elements, the rest operator collects 
or gathers multiple elements into an array.

The rest operator is denoted by three dots (...) followed by a parameter name 
in a function declaration or a function expression. It allows you to represent an
 indefinite number of arguments as an array within the function.
  Here are a few examples to illustrate its usage: */
/*const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2, 7, 8, 9];

console.log(combined); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]  */

/*Default parameters is a feature introduced in ES6 (ECMAScript 2015) that allows 
you to assign default values to function parameters.
 When a function is called, if an argument is not provided for a parameter, 
 the default value assigned during parameter declaration is used instead. */
//import and export : export u know that the function or the data will be used out side or in any other file import taking the data from other file
/*// ModuleA.js
export function greeting(name) {
  console.log(`Hello, ${name}!`);
}

export const PI = 3.14159;

// ModuleB.js
import { greeting, PI } from './ModuleA.js';

greeting('John'); // Output: Hello, John!
console.log(PI); // Output: 3.14159
 */
function myFunction() {
  let fruits = ["Ban", "orange", "apple", "mango"];
  let x = document.getElementById;
}
