function inchToFeet(inches) {
    const convertedFeet = inches / 12;
    return convertedFeet;
}

const dadaInches = 132;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);