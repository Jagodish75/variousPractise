function Person(first, last, age, department) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.department = department;
}
Person.prototype.nationality = "Bangladeshi";

const myFather = new Person("Jagodish", "Roy", 21, "Accounting");

console.log(myFather.nationality);

//In Construction object there is not able to add new property in object but by using prototype you can use this

// construction function will be Capital letter
