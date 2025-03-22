const genBtn = document.getElementById("genBtn");
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const inputBox = document.getElementById("inputBox");
const copyIcon = document.getElementById("copyIcon");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "1234567890";
let allSymbols = "~!@#$%^&*()_+";

//* Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

//*     Add event lit
genBtn.addEventListener("click", () => {
    generatePassword();
});

//* Function to generatePassword
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? allNumbers : "";
    allChars += symbol.checked ? allSymbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }
    let i = 1;
    while (i < inputSlider.value) {
        genPassword += allChars.charAt(
            Math.floor(Math.random() * allChars.length)
        );
        i++;
    }
}
