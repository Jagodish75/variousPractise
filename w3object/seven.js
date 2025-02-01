//!  Object Litteral

const person = {
    firstName: "Jagodish",
    lastName: "Roy",
};
person.age = 35;
person.lastName = "Barman";

//! Object Constructor
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
Person.prototype.nationality = "Bangladeshi";
Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};
const myFather = new Person("Anukul", "Roy", 53);
// console.log(myFather.nationality);

//! Object General Method

//* Object.assign(target, source)

const p1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};
const p2 = {
    firstName: "Joy",
    lastName: "Babu",
};
const p3 = Object.assign(p1, p2);
// console.log(p1);
// console.log(p2);
// console.log(p3);

//*  Object.entries()
const school = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};
for (const [key, value] of Object.entries(school)) {
    // console.log(key, value);
}
const myMap = new Map(Object.entries(school));
// console.log(myMap);

//*   JavaScript Object.fromEntries()

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500],
];

const myObj = Object.fromEntries(fruits);
// console.log(myObj);
//*    JavaScript Object.values()
const fruits2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};
// console.log(Object.entries(fruits2));
// console.log(Object.keys(fruits2));
// console.log(Object.values(fruits2));

//*    JavaScript Object.groupBy()

const fruit3 = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 },
];
function myCallback({ quantity }) {
    return quantity >= 200 ? "OK" : "Low";
}
const result = Object.groupBy(fruit3, myCallback);
// console.log(result);

//*   JavaScript for...in Loop
const fruits4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};
let txt = "";
for (let x in fruits4) {
    txt += fruits4[x] + " ";
}
// console.log(txt);
//!  Property Management Methods
//*  The defineProperty() Method

const person5 = {
    firstName: "John",
    lastName: "Doe",
    language: "EN",
};
Object.defineProperty(person5, "village", {
    value: "Rajpur",
    writable: false,
    enumerable: false,
});
Object.defineProperty(person5, "laguage", {
    value: "Bangla",
    writable: true,
    enumerable: true,
});
//*  The getOwnPropertyNames() Method
// console.log(Object.getOwnPropertyNames(person5));

//*    Adding Getters and Setters
const person6 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    },
    set vage(v) {
        this.lastName = v;
    },
};
person6.vage = "Roy";
// console.log(person6);

const person7 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
// console.log(person7.fullName());
const person8 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
};
// console.log(person8.fullName);
const person9 = {
    firstName: "John",
    lastName: "Doe",
    language: "english",
    get lang() {
        return this.language.toUpperCase();
    },
};
// console.log(person9.lang);
const person10 = {
    firstName: "John",
    lastName: "Doe",
    language: "english",
    set vill(v) {
        this.language = v.toUpperCase();
    },
};
person10.vill = "iloveyou";
console.log(person10.language);
