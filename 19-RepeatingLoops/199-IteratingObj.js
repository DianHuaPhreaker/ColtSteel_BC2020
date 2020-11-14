// Iterating over objects 
var score = {Eric: 90, Tod: 50, Kim: 99, Pat: 44};

// for in loop 
for (let scores in score){
    console.log(`${scores} scored ${score[scores]}`);
}

// arrays made up of keys
console.log(Object.keys(score));

// arrays made up of values
console.log(Object.values(score));

let total = 0; 
let allScores = Object.values(score);
console.log(allScores);

for (let scores of allScores) {
    total += scores;
}
console.log((total/allScores.length));
