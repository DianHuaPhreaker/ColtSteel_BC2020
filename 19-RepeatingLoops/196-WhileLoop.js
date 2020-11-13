// While Loops 
let count = 0; 
while (count < 10) {
    console.log(count);
    count++;
}

// while loop is good for something we do not know how long it loops for 

for(let i = 0; i <= 10; i++){
    console.log(i)
}

const secretCode = "BabyHippo";

let guess = prompt("enter the secret code");
while (guess !== secretCode) {
    guess = prompt("enter the secret code");
}
console.log("Congrats you got the secret!")