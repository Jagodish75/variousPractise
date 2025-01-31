// const person = {
//     fullName: function (a, b, c) {
//         return (
//             this.firstName + " " + this.lastName + " " + a + " " + b + " " + c
//         );
//     },
// };

// const male = {
//     firstName: "Ajoy",
//     lastName: "Devgon",
// };

// const female = {
//     firstName: "Kajol",
//     lastName: "Agarowal",
// };

// const cities = ["Mmubai", "Dhaka", "Rangpur"];
// console.log(person.fullName.call(male, "Mmubai", "Dhaka", "Rangpur"));
// console.log(person.fullName.apply(female, cities));

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     display: function () {
//         let x = document.getElementById("demo");
//         x.innerHTML = this.firstName + " " + this.lastName;
//     },
// };

// person.display();

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     display: function () {
//         let x = document.getElementById("demo");
//         x.innerHTML = this.firstName + " " + this.lastName;
//     },
// };

// setTimeout(person.display, 3000);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     display: function () {
//         let x = document.getElementById("demo");
//         x.innerHTML = this.firstName + " " + this.lastName;
//     },
// };
// // setTimeout(person.display, 3000);
// // let display = person.display.bind(person);
// // setTimeout(display, 3000);
// const display = person.display.bind(person);
// setTimeout(display, 3000);

/* ** Adding or Changing property in object ** */
// const person = {
//     firstName: "Jagodish",
//     lastName: "Roy",
//     language: "EN",
// };
// Object.defineProperty(person, "language", { value: false });

// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.keys(person));
// Object.defineProperty(person, "fullName", {
//     get: function () {
//         return this.firstName + " " + this.lastName;
//     },
// });
// console.log(person.fullName);

// Define an Object
// const obj = { counter: 0 };

// // Define Setters and Getters
// Object.defineProperty(obj, "reset", {
//     get: function () {
//         this.counter = 0;
//     },
// });
// Object.defineProperty(obj, "increment", {
//     get: function () {
//         this.counter++;
//     },
// });
// Object.defineProperty(obj, "decrement", {
//     get: function () {
//         this.counter--;
//     },
// });
// Object.defineProperty(obj, "add", {
//     set: function (value) {
//         this.counter += value;
//     },
// });
// Object.defineProperty(obj, "subtract", {
//     set: function (value) {
//         this.counter -= value;
//     },
// });

// // Play with counter:
// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;
// document.getElementById("demo").innerHTML = obj.counter;

const person = {
    firstName: "Jagodish",
    lastName: "Roy",
    language: "EN",
};

Object.defineProperty(person, "age", { value: 44, writable: true });
person.age = 67;
console.log(person);
