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

person.greet();

// Array and Arrays methods

// Array literal syntax - [] can contain any type of data
const arr = ["string", 1, true, {
    name: "Shubham"
}, () => {
    console.log("hi")
}];

console.log(arr);

const hobbies = ["Sports", "Cooking"];

// Loop through array using for loop
for (let hobby in hobbies) {
    console.log(hobby);
}

// using map
console.log(hobbies.map(hobby => `Hobby: ${hobby}`));


// Using const, array will not be immutable, it will be changed
hobbies.push("Programming");
console.log(hobbies)

// it may be possible to change the value of the array
hobbies[0] = "Coding";
console.log(hobbies);

const thisFunctionWillMutateTheArray = arr => {
    arr.push("New Element");
}

thisFunctionWillMutateTheArray(hobbies);
console.log(hobbies);

// copy of the array
const newHobbies = hobbies.slice();
newHobbies.push("New Element");
console.log("Old: ", hobbies);
console.log("New: ", newHobbies);