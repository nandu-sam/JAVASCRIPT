"use strict";
//this is used to has less error and bugs and its used because it identifies any error

/*let username;

document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}*/

/*let age = window.prompt("How old are you?");//prompt is used to ask the age
console.log(typeof age);// used to find the data type
age = Number(age);
console.log(typeof age);// also known as type conversion
age += 1;
console.log("Happy Birthday! you are ", age, "years old");*/

//Type conversion uisng javascript//
/*
let x;
let y;
let z;

x = Number("3.14");//If we try to convert an string to a number then it shows a status called as NaN (Not a number)
y = String(3.14);
z = Boolean("pizza ");//Note if we pass empty string in boolean it will return result as false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/

//Variables
//const let and etc//

//Creating a program to find an hypotenuse of a triangle

/*
a = window.prompt("Enter Side A");
a = Number(a);//type conversion


b = window.prompt("Enter Side B");
b = Number(b);//type conversion

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));//formula to calculate hypotenuse of a triangle
console.log("Side C:", c);*/

//creating a hypotenuse triangle function with help of html and js
/*let a;//creating a variables
let b;
let c;

document.getElementById("submitButton").onclick = function () {//this is a js script function of button clicks

    a = document.getElementById("aTextBox").value;//getting a value from a textbox in html as a string and converting to html
    a = Number(a);//type conversion

    b = document.getElementById("bTextBox").value;
    b = Number(b);//type conversion


    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));//formula to calculate the hypotenuse triangle

    document.getElementById("cLabel").innerHTML = "Side C: " + c;// calling c label by using javascript with the help of html
}*/

//this is a set time out function//

//SET TIMEOUT//

/*let timer1 = setTimeout(firstMessage, 3000);//this is a method where it specifies a operation after a specified time
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);






function firstMessage() {
    alert(`Buy this course for $500!`);
}

function secondMessage() {
    alert(`this is not a scam!`);

}

function thirdMessage() {
    alert(`asap!!!`);
}

document.getElementById("myButton").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Hey there thanks for buying this course`);

}*/
/*SET INTERVAL METHOD INVOKES A FUNCTION REPEATEDLY AFTER A NUMBER OF MILLISECONDS AND ITS A ASYNCHRONOUS FUNCTION( DOESNT PAUSE AFTER EXECUTION)*/

/*let count = 0;
let max = window.prompt("count up to what#?");

max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
    count += 1;
    console.log(count);
    if (count >= max) {
        clearInterval(myTimer);
    }
}*/

//A clock project
/*
const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);
function update() {
    let date = new Date();
    myLabel.innerHTML = formatTime(date);
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amorpm = hours >= 12 ? " pm" : "am";
        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        return `${hours}:${minutes}:${seconds}${amorpm}`
    }
    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}*/

/*Synchronous code = in an ordered sequence step-by-step linear instructions (start now, finish now)
 And in Asynchronous code = out of sequence ex: access a database fetch a file
  tasks that take time (start now, finish later)*/

//Example for Asynchronous code

/*console.log("start")
setTimeout(() => console.log("This is asynchronous"),5000);
console.log("End");*/

/*console.time()= starts atimer you can you to track how long an operation takes give a unique name*/
/* arrow function = compact alternative to a traditional function expression => */

/* promise = object that encapsulates the result of an asynchronous operation
 let asynchronous methods return values
 like synchronous methods "i promise to return something in the future"*/

// the State is 'pending then : 'fulfilled' or 'rejected'
//the result isd what can be returned 2 parts producing and consuming
/*const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;

    if (fileLoaded) {
        resolve("File Loaded Successfully");
    }
    else {
        reject("File Failed to load");
    }

});

promise.then(value => console.log(value))
    .catch(error => console.log(error));*/

//New example all about promise

/*const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});
wait(3000).then(() => console.log("Thankyou for waiting !"));*/

//async = makes a function return a promise
/*async function loadFile() {
    let fileLoaded = true;

    if (fileLoaded) {
        return "File Loaded Successfully";
    }
    else {
        throw "File Failed to load";
    }

}

loadFile().then(value => console.log(value))
    .catch(error => console.log(error));*/

/*document.addEventListener("click",myFunction);  
 function myFunction(){ 
 alert("hello world");
 }*/

/*console.log("First");

 setTimeout(function(){console.log("second");},1000);
 console.log("Third");
 setTimeout(function(){console.log("Fourth");},600);
 console.log("Fifth");*/

/*PROMISES ARE A WAY TO HANDLE ASYNCHRONOUS OPERATION IN JAVASCRIPT*/
/*const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: "mulan" };
    resolve(data);
  }, 3000);
  const errorMessage = "Ooops something is wrong...";
  reject(errorMessage);
}, 5000);
});

fetchData
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });*/
/*Async and await */
/*async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Example" };
      resolve(data);
    }, 1000);
  });
}

async function main() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}*/

/*closures */

//JONAS SCHMEDTMANN LECTURES AND CODING CHALLENGES//
/*const marksHeight = 1.43;
const marksMass = 68;
const johnsHeight = 1.55;
const johnsMass = 78;

const BMIMark = marksMass / marksHeight ** 2;
const BMIJohn = johnsMass / johnsHeight ** 2;

if (BMIMark <= BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is greater than ${BMIJohn} John's`);
} else {
  console.log(`John's BMI ${BMIJohn} is greater than ${BMIMark} Mark's`);
}*/

//const BMIJohn = johnsMass / (johnsHeight * johnsHeight);

//console.log(BMIMark, BMIJohn, markHigherBMI);

//TEMPLATE LITERALS

/*const firstName = "Windflower";
const job = "programmer";
const birthYear = 2000;
const year = 2023;
const currentYear = birthYear - year;

const windflower = `I'm ${firstName} and a ${job} and i am ${currentYear} old Thankyou!!!`;

console.log(windflower);*/

/*const teamDolphins = (44 + 23 + 71) / 3;
const teamKoalas = (65 + 54 + 49) / 3;
const calcAverage1 = (teamDolphins) => {
  const checkWinner1 = calcAverage1;
  console.log("Yeah its the dolphins who won");
  return calcAverage1;
};
const calcAverage2 = (teamKoalas) => {
  const checkWinner2 = calcAverage2;
  console.log("wowww its the Koalas victory");
  return calcAverage2;
};
if (calcAverage1 > calcAverage2) {
  console.log("The result is" + calcAverage1);
} else {
  console.log("The result is" + calcAverage2);
}*/

/*const teamDolphins = (44 + 87 + 71) / 3;
const teamKoalas = (65 + 54 + 49) / 3;

const calcAverage1 = teamDolphins;
const calcAverage2 = teamKoalas;

const checkWinner = function () {
  if (calcAverage1 > calcAverage2) {
    console.log(
      "Yeah, it's the Dolphins who won with an average score of " + calcAverage1
    );
  } else if (calcAverage2 > calcAverage1) {
    console.log(
      "Wow, it's the Koalas who won with an average score of " + calcAverage2
    );
  } else {
    console.log(
      "It's a draw! Both teams have the same average score of " + calcAverage1
    );
  }
};
checkWinner();*/

/*(if (teamDolphins && teamKoalas >= average) {
  console.log("Yes you are the winner");
} else if (teamDolphins && teamKoalas <= average) {
  console.log("yay its a draw and its okay to have low score");
} else if (teamDolphins == teamKoalas) {
  console.log("both are winners");
}*/

//CONDITIONAL OPERATOR OR THE TERNARY OPERATOR

/*const billValue = 275;
const tip =
  billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `thie billValue is ${billValue}, And the tip is ${tip},and the totalvalue ${
    billValue + tip
  }`
); */

//functions by jonas schmedtmann you can reuse a function and you call the function more than once

/*function fruitProcessor(apples, oranges) {
  //method or function parameters
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 3); //function or method arguments these are called arguments
console.log(appleJuice);*/

/*var x = 1;
a();
b();

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}*/

/*var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4); */

//Nested functions

/*const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applesPieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `juice with  ${applesPieces} apple Pieces and with ${orangePieces} pieces of oranges`;
  return juice;
};

console.log(fruitProcessor(2, 3));*/

//ARRAY OPERATION IN JAVASCRIPT

/*const friends = ["Raya", "mulan", "alica", "benja"];

console.log(friends);
console.log(friends.length);
console.log(friends.length - 1);
friends.push("Namari"); //Operations on array[basics] inserts the elements at the end of the array
console.log(friends);
friends.unshift("shangchi"); //inserts the element at the starting of the array
console.log(friends);
friends.pop(); //deletes the last element from the array
console.log(friends);
friends.shift(friends); //deletes the elemnts at the beginning of the array
console.log(friends);*/

//objects doesnot have any order and its used for unstructured data and stores value in key-value pairs

/* const raya = {
  firstName: "Raya",
  lastName: "Benja",
  birthYear: 2000,
  age: 23,
  job: "political advisor",
  country: "kumandra",

  calculateAge: function (birthYear) {
    return 2023 - birthYear;
  },
  calculateAge: function () {
    return 2023 - this.birthYear;
  },
};
console.log(raya);
console.log(raya.firstName);
console.log(raya.lastName);
console.log(raya["lastName"]); //another way of accssing the data rather than dot operator is using the bracket operator but we use string to retrieve the data

const nameKey = "Name";
console.log(raya["first" + nameKey]);
console.log(raya["last" + nameKey]);
//using dot and bracket notation we can even insert/add the elements to the objects

raya.friends = ["Boun", "Noi", "Namari"];
raya["follows"] = "sisu";
console.log(raya);

console.log(
  `${raya.firstName} has ${raya.friends.length} freinds and her best friend is ${raya.friends[0]}`
);

console.log(raya.calculateAge(2000)); */

//Rather than passing object properties as a parameter in a function (line 418 to 420) we can access the properties using this keyword/variable(line 421 to 422)

/*NOTE : Why should we use this keyword instead of just passing the object's properties as a parameter to a function ??? 
SOLUTION: when we just pass the properties parameter we should make sure that after every changes made to objects data we should pass the changed data
but instead if we use this keyword we can directly point to required objects properties*/
//SOLUTION example
// AN OBJECT LOOKS LIKE THIS
/*const raya = {
  firstName: "Raya",
  lastName: "Benja",
  birthYear: 2000,
  age: 23,
  job: "political advisor",
  country: "kumandra",
  hasLegalAutority: true,

  calculateAge: function () {
    return 2023 - this.birthYear;
  },

  getSummary: function () {
    return `${
      this.firstName
    } is a ${this.calculateAge()} year old and she is from ${
      this.country
    } and also she is a ${this.job} and she has ${
      this.hasLegalAutority ? "a" : "no"
    } legal autority`;
  },
};

console.log(raya.getSummary());*/

/*const marksHeight = 1.43;
const marksMass = 68;
const jonasHeight = 1.55;
const jonasMass = 78;

const BMIMark = marksMass / marksHeight ** 2;
const BMIJonas = jonasMass / jonasHeight ** 2;

if (BMIMark <= BMIJonas) {
  console.log(`Mark's BMI ${BMIMark} is greater than ${BMIJonas} Jonas's`);
} else {
  console.log(`Jonas's BMI ${BMIJonas} is greater than ${BMIMark} Mark's`);
}

const BMIJonas = jonasMass / (jonasHeight * jonasHeight);

console.log(BMIMark, BMIJonas, markHigherBMI);*/

/*const MarkMiller = {
  firstName: "mark",
  lastName: "miller",
  markMass: 78,
  markHeight: 1.69,

  calcBMI: function () {
    const BMIMark = this.markMass / (this.markHeight * this.markHeight);
    return BMIMark;
  },
};
console.log(MarkMiller.calcBMI());
const JonasSchmedtmann = {
  firstName: "jonas",
  lastName: "schmedtmann",
  jonasMass: 92,
  jonasHeight: 1.95,

  calcBMI: function () {
    const BMIJonas = this.jonasMass / (this.jonasHeight * this.jonasHeight);
    return BMIJonas;
  },
};
console.log(JonasSchmedtmann.calcBMI());
console.log(
  `The bmi of ${
    this.BMIMark > this.BMIJonas
      ? "Jonas has higher bmi"
      : "mark has higher bmi"
  } `
);*/
/*LOOPS NOTE : REMEMBER NOT TO REPEAT YOURSELF  */

/*FOR LOOP KEEPS RUNNING WHILE CONDITION IS TRUE
 AND IT IS ALSO USED FOR THE AMOUNT OF TIME THE LOOPS SHOULD
  RUN
 1) COUNTER 2)ITERATION 3)INCREMENT/DECREMENT*/
/*for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifiting repeated weights ${rep} 🏋️‍♂️`);
}
*/
/*THIS IS THE ARRAY EXAMPLE */
const raya = [
  "Raya",
  "Benja",
  1890 - 9980,
  "kumandra",
  Boolean,
  "politicaladivisor",
];
for (let i = 0; i < raya.length; i++) {
  if (typeof raya[i] !== "string") continue;
  console.log(raya[i], typeof raya[i]);
}
