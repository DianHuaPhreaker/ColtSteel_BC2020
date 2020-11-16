// Function with multiple arguments 
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

greet("Eric", "Han")


function repeat(str, num){
    let result = ''; 
    for (let i = 0; i < num; i++){
        result += str;
    }
    console.log(result);
}

repeat("Hello ", 4)

// Multiple arguments exercise 

function isSnakeEyes(dice1, dice2){
if (dice1 === dice2){
    console.log("Snake Eyes!");
} else {
    console.log("Not Snake Eyes!");
}
}

isSnakeEyes(1,1)
isSnakeEyes(1,5)
isSnakeEyes(4,5)