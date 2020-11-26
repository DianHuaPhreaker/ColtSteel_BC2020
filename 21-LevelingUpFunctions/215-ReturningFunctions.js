// Returning Functions 

function makeMysteryFunc(){
    const rand = Math.random();
    console.log(rand);
    if (rand > 0.5) {
        return function() {
            console.log("Congrats, I am a good function");
            console.log("you win a million dollars");
        }
    } else {
        return function() {
            alert("you have been infected by a computer virus")
            alert("Stop trying to close this window!")
            alert("Stop trying to close this window!")
            alert("Stop trying to close this window!")
            alert("Stop trying to close this window!")
            alert("Stop trying to close this window!")
            alert("Stop trying to close this window!")
        }
    }
}

// make function that tells you if something is between 50 and 100

function isBetween(num){
    return num >= 50 && num <= 100
}

console.log(isBetween(55))


function isBetween2(num){
    return num >= 1 && num <= 10
}

console.log(isBetween2(4))


function makeBetweenFunc(min, max){
    return function(num) {
        return num >= min && num <= max;
    }
}

console.log(makeBetweenFunc(100, 200))
const isChild = makeBetweenFunc(1, 18);
console.log(isChild(88)); // false 
const isAdult = makeBetweenFunc(19, 64); 
console.log(isAdult(55))
const isSenior = makeBetweenFunc(64, 100); 
console.log(isSenior(99))
