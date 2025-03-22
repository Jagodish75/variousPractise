//* Function Declarations
function multiple(a, b) {
    return a * b;
}

//*  Function Expressions
const x = function (a, b) {
    return a * b;
};
// console.log(x(3, 3));

//*  Functions Can Be Used as Values
function myFunc(a, b) {
    return a * b;
}
const x1 = myFunc(4, 3) * 2;
// console.log(x1);

//*  Self-Invoking Functions
(function (a, b) {
    // console.log(a * b);
})(2, 3);

// console.log(typeof x1);

//* arguments.length
function myFunction(a, b) {
    return arguments.length;
}
// console.log(myFunction(4, 3));

//* Arrow Functions
// ! No need to use function, return and curley brackets
//! Arrow functions do not have their own this.
//! Arrow functions are not hoisted.
//! They must be defined before they are used.
const x3 = (x, y) => x * y;
// console.log(x3(30, 30));

//*  Function Parameters and Arguments
//! Default parameter
function myFunction2(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}
// console.log(myFunction2(5));
function myFunction3(x, y = 10) {
    return x * y;
}
// console.log(myFunction3(5));
//! Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let x4 = sum(2, 3, 4, 5);
console.log(x4);
