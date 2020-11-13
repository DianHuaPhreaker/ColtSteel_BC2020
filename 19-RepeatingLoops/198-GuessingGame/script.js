let inputMaxNumber = prompt("Welcome! Enter your maximum number!");

let guessNumber = Math.floor(Math.random() * inputMaxNumber);
console.log(guessNumber);


let guess = prompt("Enter your first guess: ");
let numberGuesses = 1;

while (guess != guessNumber){
    if (guess < guessNumber){
        guess = prompt("Too low. Guess again");
        numberGuesses++;
    }
    else if (guess > guessNumber) {
        guess = prompt("Too high. Guess again!");
        numberGuesses++;
    }
    else if (guess === "q") {
        numberGuesses++;
        break;

    }
}
console.log(`It took you ${numberGuesses} tries`)
