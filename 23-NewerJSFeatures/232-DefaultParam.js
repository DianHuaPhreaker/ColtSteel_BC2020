// Default Parameters 
function rollDie(numSides){
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(6));
console.log(rollDie(6));
console.log(rollDie(6));
console.log(rollDie(6));
console.log(rollDie(6));

// function with param defaulting to 6
// function rollDie2(numSides){
//     if(numSides === undefined){
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// Easier way

function rollDie2(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie2(8));

// always have default parameters come second
function greet(person, msg="Hey there!", punc = "!"){
    console.log(`${msg}, ${person}${punc}`);
}

console.log(greet("dick"));