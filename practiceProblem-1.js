// Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

function convertHourIntoMinutes(hour) {
    let convertedTime = hour * 60;
    return convertedTime;
}

var hour = 2.5;

var convertedMinute = convertHourIntoMinutes(hour);

console.log(convertedMinute);