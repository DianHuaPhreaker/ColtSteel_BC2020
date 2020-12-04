// Spread - 
console.log(Math.max(12, 3, 5, 4, 6, 3, 5, 5, 5346));
console.log(Math.min(2, 3, 4));

const nums = [12, 3, 5, 4, 6, 3, 5, 5, 5346];
console.log(Math.max(nums));

console.log(Math.max(...nums));
console.log(Math.min(...nums));
console.log(nums);
console.log(...nums); // separated by spacing

console.log(..."hello");