const person = {
    firstName: "Jagodish",
    lastName: "Roy",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
// person.age = 35;
// person.firstName = "Kartick";

Object.defineProperty(person, "age", {
    value: 35,
    writable: true,
    enumerable: true,
});
// Object.defineProperty(person, "fullName", {
//     get: function () {
//         return this.firstName + " " + this.lastName;
//     },
// });

// Object.defineProperty(person, "village", {
//     set: function (a) {
//         this.lastName = a;
//     },
// });
// person.village = "Kartick";
// Object.defineProperty(person, "firstName", { value: "Kartick" });
// console.log(person);
// console.log(Object.getOwnPropertyDescriptors(person));
// console.log(Object.getOwnPropertyNames(person));
// for (const x of Object.keys(person)) {
//     console.log(person[x]);
// }
// console.log(Object.getPrototypeOf(person));
// console.log(Object.keys(person));
// console.log(Object.getOwnPropertyNames(person));
// console.log(person.fullName());

for (let [key, value] of Object.entries(person)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}
