// const person = {
//     firstName: "jagodish",
//     lastName: "Roy",
// };
// console.log(person);

// const person2 = {};
// person2.name = "Kartick";
// person2.house = "Rajpur";
// console.log(person2);

function Person(firstName, lastName, age, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dob = dob;
}
Person.nationality = "Bangladeshi";
Person.prototype.nationality = "Bangladeshi";
const myFather = new Person("Anukul", "Barman", 65, 1956);
// console.log(myFather);
console.log(myFather);
