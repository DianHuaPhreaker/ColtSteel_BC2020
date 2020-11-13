// Break keyword 

let input = prompt("Hey, say something");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me"){
        break;
    }
}
console.log("Ok, you win");

let i = 0; 

while (i < 1000) {
    console.log(i);
    i++
}