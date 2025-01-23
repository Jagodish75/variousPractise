// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 31;
// person.eyeColor = "Blue";
// console.log(person.age);

// const person2 = new Object();
// person2.firstName = "John";
// person2.lastName = "Doe";
// person2.age = 31;
// person2.eyeColor = "Blue";

// console.log(person2);

// const joy = {
//     firstName: "Jagodish",
//     lastName: "Roy",
// };

// console.log(joy);

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eye = eye;
//     this.nationality = "English";
// }
// const student = new Person("Tomal", "Roy", 31, "Green");

// console.log(student);

// function Student(first, age, roll) {
//     this.firstName = first;
//     this.age = age;
//     this.roll = roll;
// }
// Student.prototype.year = "Thousand";
// Student.prototype.fullName = function () {
//     return this.firstName + " " + this.roll;
// };
// const joy = new Student("Jagodish", 21, "Roy");

// console.log(joy.fullName());

// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
// };
// const person2 = {
//     firstName: "Anne",
//     lastName: "Smith",
// };
// Object.assign(person1, person2);
// console.log(person1);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
// };
// console.log(person);
// let text = Object.entries(person);
// console.log(text);

// const fruits = {
//     Bananas: 300,
//     Oranges: 200,
//     Apples: 500,
// };
// let fruits2 = Object.entries(fruits);
// let text = "";
// for (let [fru, amount] of fruits2) {
//     text += fru + " " + amount;
// }
// console.log(text);

// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
// let fruitArr = Object.entries(fruits);
// const myMap = new Map(fruitArr);
// console.log(myMap);
// console.log(fruitArr);

// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500],
// ];
// const myObj = Object.fromEntries(fruits);
// console.log(myObj);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
// };
// let text = Object.values(person);
// console.log(text);
