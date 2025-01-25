const person = {
    fullName: function (city, city2, city3) {
        return (
            this.firstName +
            " " +
            this.lastName +
            " " +
            city +
            " " +
            city2 +
            " " +
            city3
        );
    },
};
const person1 = {
    firstName: "Jagodish",
    lastName: "Roy",
};

const person2 = {
    firstName: "Kartick",
    lastName: "Barman",
};

console.log(person.fullName.call(person1, "A", "B", "C"));
const city = ["A", "B", "C"];
console.log(person.fullName.apply(person2, city));
