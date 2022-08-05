function milesToKilometer(miles) {
    const convertedKm = miles * 1.60934;
    return convertedKm;
}

const aToBMile = 3;
const aToBKm = milesToKilometer(aToBMile);
console.log(aToBKm);