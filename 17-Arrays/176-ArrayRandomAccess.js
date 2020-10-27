// Array random access

let dwarves = [
  "Doc",
  "Dopey",
  "Bashful",
  "Grumpy",
  "Sneezy",
  "Sleepy",
  "Happy",
];

console.log(dwarves.length);

console.log(dwarves[0]);
console.log(dwarves[1]);
console.log(dwarves[2]);
console.log(dwarves[3]);
console.log(dwarves[4]);
console.log(dwarves[5]);
console.log(dwarves[6]);
console.log(dwarves[9]); // undefined
console.log(dwarves[1][0]); // will give you index of 1 "dwarves" and index of 0 in Dopey

let colors = ["red", "orange", "yallow"];
colors[2] = "yellow";
console.log(colors);

colors[1] = 70;
console.log(colors);

colors[10] = "indigo";
console.log(colors);

console.log(colors[9]); // undefined
console.log(colors[10]); // indigo

let beatles = ["paul", "john", "george"];

beatles[3] = "ringo";
console.log(beatles);
