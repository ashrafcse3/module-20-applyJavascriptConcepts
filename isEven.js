function isEven(number) {
    const reminder = number % 2;
    if (reminder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNumber = isEven(1103);
console.log(myNumber);

const number2 = isEven(5552);
console.log(number2);