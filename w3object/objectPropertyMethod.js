const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN",
};
Object.defineProperty(person, "age", { value: 22 });
console.log(person.age);
