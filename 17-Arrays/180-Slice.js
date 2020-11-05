// 180 - Slice.js

// Slice
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log(colors.slice());

console.log(colors.slice(3));

let coolColors = colors.slice(3);

console.log(coolColors);

console.log(colors);

console.log(colors.slice(2, 4));

let warmColors = colors.slice(0, 3);
console.log(warmColors);

console.log(colors.slice(-3)); // gives you the last three

// Splice
// "we are joining it to something else"
console.log(colors);
// (starting point, delete how many)
console.log(colors.splice(5, 1));
console.log(colors);
// no indigo

// adding something
console.log(colors.splice(1, 0, "red-orange"));
console.log(colors);

console.log(colors.splice(3, 0, "yellow-green", "forestgreen"));
console.log(colors);

// sort
let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
console.log(scores.sort());
