// DO NOT TOUCH!!! (please)
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

// YOUR CODE GOES BELOW THIS LINE:
console.log(airplaneSeats[3][1]);

let planeSeat = airplaneSeats[3].splice(1, 1, "Hugo");

console.log(airplaneSeats);
