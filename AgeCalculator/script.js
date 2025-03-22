const birthDate = document.getElementById("birthDate");
const currentDate = document.getElementById("currentDate");
const output = document.getElementById("output");
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
    if (birthDate.value == "" || currentDate.value == "") {
        output.innerHTML = "Please select date";
    } else {
        calculateAgeDifference(birthDate.value, currentDate.value);
    }
});

//* Function for age Difference
function calculateAgeDifference(start, end) {
    //  Date of birth year classification
    let dobYear = parseInt(start.substring(0, 4));
    let dobMonth = parseInt(start.substring(5, 7));
    let dobDate = parseInt(start.substring(8, 11));
    //  Date of current year classification
    let currYear = parseInt(end.substring(0, 4));
    let currMonth = parseInt(end.substring(5, 7));
    let currDate = parseInt(end.substring(8, 11));
    //  Year Difference
    let yearDifference = currYear - dobYear;
    //  Month Difference
    let monthDifference;
    if (currMonth >= dobMonth) {
        monthDifference = currMonth - dobMonth;
    } else {
        yearDifference--;
        monthDifference = 12 + currMonth - dobMonth;
    }
    //  Date Difference
    let dateDifference;
    if (currDate >= dobDate) {
        dateDifference = currDate - dobDate;
    } else {
        monthDifference--;
        noOfDays = daysInMonth(birthDate.value, currentDate.value, 0);
        dateDifference = noOfDays + currDate - dobDate;
        //  case when monthAgeDifference goes negative
        //     if (monthDifference < 0) {
        //         monthDifference = 11;
        //         yearDifference--;
        //     }
    }
    output.innerHTML = `Your are ${yearDifference} years ${monthDifference} months ${dateDifference} days old`;
}

//* Function for calculate date in month
function daysInMonth(year, month, days) {
    return new Date(year, month, days).getDate();
}
