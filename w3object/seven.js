//  / const person = {
//     firstName: "jagodish",
//     lastName: "Roy",
// };
// console.log(person);

// const person2 = {};
// person2.name = "Kartick";
// person2.house = "Rajpur";
// console.log(person2);

// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
// };
// const person2 = {
//     firstName: "Jagodish",
//     lastName: "Roy",
// };
// const person3 = Object.assign(person1, person2);
// console.log(person3);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
// };
// for (const [key, value] of Object.keys(person)) {
// console.log(`${key} : ${value}`);
// }
// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500],
// ];
// console.log(Object.fromEntries(fruits));
// console.log(Object.keys(person));
// console.log(Object.values(person));

// / Create an Array
const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 },
];
// Callback function to select low volumes
function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}
