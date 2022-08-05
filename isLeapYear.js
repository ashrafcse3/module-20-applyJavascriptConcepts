function isLeapYear(year) {
    if (year % 4 == 0 || year % 400 == 0 && year % 100 != 0) {
        return true;
    }
    else {
        return false;
    }
}

const checkingYear = 2000;
console.log(isLeapYear(checkingYear));