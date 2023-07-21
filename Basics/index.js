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




 