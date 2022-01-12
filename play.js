let name = "Shubham";
let age = 21;
const hasHobbies = true;
// function declaration
function greet(name, age) {
    console.log(`Hello ${name} you are ${age}`);
}
// function expression
const greet2 = (name, age) => {
    console.log(`Hello ${name} you are ${age}`);
}
// single line function expression
const add = (a, b) => a + b;

// multiple line function expression
const summarizeUser2 = (userName, userAge, userHasHobbies) => {
    return `Name is ${userName} age is ${userAge} and the user has hobbies ${userHasHobbies}`;
}

// convert to arrow function
const summarizeUser = (userName, userAge, userHasHobbies) => `Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobbies}`;


console.log(summarizeUser(name, age, hasHobbies));

// This will through an error because due to const variable we cannot change the value of the variable
// hasHobbies = false;

// Object
const person = {
    name: "Shubham", // property
    age: 27, // property
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

person.great();