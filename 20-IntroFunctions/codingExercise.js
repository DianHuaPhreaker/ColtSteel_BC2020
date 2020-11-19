// Coding Exercise 38
function multiply(x, y){
    return x * y; 
}

console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));

// Coding Exercise 39
function isShortsWeather(temperature) {
    if (temperature >= 75){
        return true
    } return false; 
}

console.log(isShortsWeather(75));
console.log(isShortsWeather(76));
console.log(isShortsWeather(74));

// Coding Exercise 40
function lastElement(arr) {
    if (arr.length < 1 || arr == undefined){
        return null;
    }
    return arr[arr.length -1];
}
console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));


// Capitalize first letter in word
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(capitalize("bitch"));

// Sum of Arrays 
function sumArrays(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log((arr[i]));
    }
}

console.log(sumArrays[1, 2, 3]);

// Coding Exercise 43
function returnDay(day){
    if (day === 1){
        return "Monday";
    } else if (day === 2){
        return "Tuesday";
    } else if (day === 3){
        return "Wednesday";
    } else if (day === 4){
        return "Thursday";
    } else if (day === 5){
        return "Friday";
    } else if (day === 6){
        return "Saturday";
    } else if (day === 7){
        return "Sunday";
    } else if (day > 7 || day < 0){
        return null;
    } else {
        return null; 
    }
}

console.log(returnDay(9));