// General Methods

// 1 Object.assign(target, source)
// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 40,
//     eyeColor: "blue",
// };

// const person2 = {
//     firstName: "Jagodish",
//     lastName: "Roy",
// };

// Object.assign(person1, person2);

// console.log(person1);

// 2 Object.entries()
// //It return array form object

// const result = Object.entries(person1);
// console.log(result);

// const fruits = {
//     Bananas: 300,
//     Oranges: 200,
//     Apples: 500,
// };

// const result = Object.entries(fruits);
// let text = "";
// for (let [fruit, value] of result) {
//     text += fruit + " " + value + "<br />";
// }
// console.log(text);

const person = {
    fname: " John",
    lname: " Doe",
    age: 25,
    fname1: " John",
    lname1: " Doe",
    age1: 25,
};

let txt = "";
for (let x in person) {
    txt += person[x];
}
console.log(txt);
