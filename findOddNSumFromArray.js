// 20-6 Get Odd Numbers of an array and get odd Sum of an array

function getOddNumbersFromArray(array) {
    const oddNumbersArray = [];
    for (let i = 0; i < array.length; i++) {
        const index = i;
        const element = array[index];
        if (element % 2 !== 0) {
            oddNumbersArray.push(element);
        }
    }
    return oddNumbersArray;
}

function getSumFromArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let index = i;
        let element = array[index];
        sum = sum + element;
    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// get odd number from the array
const oddNumbers = getOddNumbersFromArray(myNumbers);
console.log(oddNumbers);


// get sum for this array
const sum = getSumFromArray(oddNumbers);
console.log(sum);
