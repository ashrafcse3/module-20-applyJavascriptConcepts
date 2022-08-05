function whileFactorial(number) {
    let multiplication = 1;
    let i = 1;
    while (i <= number) {
        multiplication = multiplication * i;
        i++;
    }
    return multiplication;
}

const result = whileFactorial(9);
console.log(result);
