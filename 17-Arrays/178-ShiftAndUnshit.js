// Shift and Unshift
// Shift - remove from start
let movieLine = ["tom", "nancy", "pablo", "oliver", "eva"];
movieLine.shift();
console.log(movieLine);
// no more tom
let nextPatron = movieLine.shift();
console.log(nextPatron);
console.log(movieLine);
// ['pablo', 'oliver', 'eva']
movieLine.shift();
console.log(movieLine);
movieLine.shift();
movieLine.shift();
console.log(movieLine);
// movieLine = []

// Unshift - add to start (how we add an item to beginning of an array)
movieLine.push("jerry", "deniz", "kevin", "carly");
console.log(movieLine);
movieLine.unshift("VIP");
console.log(movieLine);
movieLine.shift();
console.log(movieLine);
