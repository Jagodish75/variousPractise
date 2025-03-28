const inputField = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            inputField.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            inputField.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            inputField.value = string;
        } else {
            string += e.target.innerHTML;
            inputField.value = string;
        }
    });
});
