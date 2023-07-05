//this is a example for an arrow function 
/*function greet(){
    console.log("Hello howdy!!")
}

greet();*/


//arrow function
/*const greet = () => {
    console.log("Hello this is also the greet message with arrow function");
}
greet();

//call back function
const calculate=(a, b, operation) =>{
    return operation(a,b);
};

const addition=calculate( 3,4, (num1,num2) =>{
return num1+num2;
});
console.log(addition);


const subtraction=(a,b)=>a-b;
const subResult=calculate(8,4, subtraction);
console.log(subResult);*/


//sync function works in normal flow
/*console.log("Hello");
console.log("how ever");
console.log("are you");
console.log("who cares : 😆");



//Async function example
console.log("hello");

 setTimeout(function () {
     console.log("this will execute later");
 }, 3000);

 console.log("world");
 console.log("three");*/

 function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a + b;
      resolve(result);
    }, 2000);
  });
}

function subtract(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a - b;
      resolve(result);
    }, 2000);
  });
}

function multiply(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a * b;
      resolve(result);
    }, 2000);
  });
}

/*add(5, 2)
  .then(result => {
    console.log('Addition Result:', result);
    return subtract(result, 3);
  })
  .then(result => {
    console.log('Subtraction Result:', result);
    return multiply(result, 4);
  })
  .then(result => {
    console.log('Multiplication Result:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });*/
  async function performOperations() {
    try {
      const additionResult = await add(5, 2);
      console.log('Addition Result:', additionResult);
  
      const subtractionResult = await subtract(additionResult, 3);
      console.log('Subtraction Result:', subtractionResult);
  
      const multiplicationResult = await multiply(subtractionResult, 4);
      console.log('Multiplication Result:', multiplicationResult);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  performOperations();









  //creating a chain of asynchronous operations.












 /* function performOperations(a, b) {
    add(a, b, function(sum) {
      subtract(sum, b, function(difference) {
        multiply(difference, b, function(product) {
          console.log('Final Result:', product);
        });
      });
    });
  }
  
  performOperations(5, 3);*/