/*const number1 = [4, 5, 6, 7, 8];
const number2 = number1.map((number) => {
  //map and arrow function
  return number * 2;
});
console.log(number2);*/

/*const numbers = [4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0;
});

console.log(evenNumbers); // Output: [4, 6, 8]
console.log(oddNumbers); // Output: [5, 7, 9]*/

/*
const number = [4, 5, 6, 7, 8, 9];
const output = number.reduce((acc, curr) => {
  acc = curr + acc;
  return acc;
}, 0);
console.log(output);*/
/*const names = ["Alice", "Bob", "Charlie"];

const nameLength = names.map(function (name) {
  return name.length;
});

console.log(nameLength);*/
let text = " ";
let numbers = [4, 5, 6, 7, 8, 9];
numbers.forEach(myFunction);
function myFunction(value) {
  text = text + "  " + value;
}
console.log(text);
