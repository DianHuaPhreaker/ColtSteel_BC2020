// Slice repeate

// Slice
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log(colors.slice());

// Will go from the index of 5 to the end
console.log(colors.slice(5));

// will go from index of 1 to the end
console.log(colors.slice(1));

let coolColors = colors.slice(3);
console.log(coolColors);

// where to start in the index and where to end
console.log(colors.slice(2, 4));

let warmColors = colors.slice(0, 3);
console.log(warmColors);

console.log(colors);

// splice - when we splice something we join it to something else
// removing something

// (starting point, and how many to delete)
console.log(colors.splice(5, 1));
console.log(colors); // no more indigo

let days = ["Monday", "Tuesday", "Wednesday"];

console.log(days.splice(1, 2));

// insert value betwen red and orange
console.log(colors.splice(1, 0, "red-orange"));
console.log(colors);
