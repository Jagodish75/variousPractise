"use strict";
// Create Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};

// Seal Object
Object.seal(person);

// Test Error
let text = "";
try {
    delete person.age;
    text = Object.values(person);
} catch (err) {
    text = err;
}

console.log(text);
