// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "Bangla",
//     set lang(value) {
//         this.language = value;
//     },
// };
// person.lang = "English";
// console.log(person.language);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     },
// };
// console.log(person.fullName());

// const person2 = {
//     firstName: "Jagodish",
//     lastName: "Roy",
//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     },
// };
// console.log(person2.fullName);

// Create an object:
const person = {
    firstName: "Jagodish",
    lastName: "Roy",
    Language: "English",
    // get lang() {
    //     return this.Language.toUpperCase();
    // },
    set lang(lang) {
        return (this.Language = lang.toUpperCase());
    },
};
person.lang = "Bangla";
console.log(person.Language);
