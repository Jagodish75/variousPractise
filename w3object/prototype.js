/************first example************/
// const person1 = {
//     firstName: "Jagodish",
//     lastName: "Roy",
// };
// person1.age = 21;
// console.log(person1);

/************Second example************/
// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }
// const joy = new Person("Jagodish", "Roy");
// const babu = new Person("Kartick", "Barman");

// Person.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastName;
// };
// Person.prototype.age = 21;

// console.log(joy);
// console.log(joy.getFullName());

/************Third example************/
// function Person() {
//     this.name = "Jagodish Roy";
// }
// Person.prototype.age = 31;
// const joy = new Person();
// Person.prototype = { age: 13 };
// const babu = new Person();
// console.log(joy);
// console.log(babu);

// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }
// Person.prototype.gender = "Male";

// const joy = new Person("Jagodish", "Roy", 31);

// Person.prototype = { gender: "female" };
// const babu = new Person("Kartick", "Barman", 52);

// console.log(joy.gender);
// console.log(babu.gender);
