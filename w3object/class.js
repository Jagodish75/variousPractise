class ClassName {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar1 = new ClassName("Ford", 2014);
const myCar2 = new ClassName("Ford", 2014);

console.log(myCar1);
