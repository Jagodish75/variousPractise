// let myArr = ["thor", "spiderman"];

// let myObj = {
//     thor: "humer",
//     spiderman: "sling",
//     getSpiderPower: function () {
//         console.log(`Spiderman power is ${this.spiderman}`);
//     },
// };

// Object.prototype.hitesh = function () {
//     console.log(`Hitesh is present in all object`);
// };
// Array.prototype.hey = function () {
//     console.log(`Hitesh says hello`);
// };
// myArr.hitesh();
// myArr.hey();
// myObj.hitesh();
// myObj.hey();

const User = {
    name: "Chai",
    email: "ABC@google.com",
};
const Teacher = {
    makeVideo: true,
};
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
};
Teacher.__proto__ = User;
Object.setPrototypeOf(TeachingSupport, Teacher);
