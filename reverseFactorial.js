function reverseFactorial(number) {
    let multiplication = 1;
    for (let i = number; i >= 1; i--) {
        multiplication = multiplication * i;
    }
    return multiplication;
}

const result = reverseFactorial(9);
console.log(result);