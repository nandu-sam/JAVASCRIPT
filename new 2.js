const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

const markHigherBMI = BMIMark > BMIJohn;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;

console.log(BMIMark, BMIJohn, markHigherBMI);
