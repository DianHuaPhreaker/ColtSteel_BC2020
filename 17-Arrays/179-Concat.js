// concat, indexOf, includes and reverse
// concat
let cats = ["blue", "kitty"];

let dogs = ["rusty", "wyatt"];

console.log(cats.concat(dogs));
// makes new array
console.log(cats);

let comboParty = dogs.concat(cats);
console.log(comboParty);

// includes()

console.log(cats.includes("blue")); // true
console.log(cats.includes("BLUE")); // false

// indexOf - easy way to tell if element is in an array
console.log("bllue".indexOf("b"));

// reverse - reverse an array - destructive array
console.log(comboParty.reverse());
// it reverses the original array
console.log(comboParty);
