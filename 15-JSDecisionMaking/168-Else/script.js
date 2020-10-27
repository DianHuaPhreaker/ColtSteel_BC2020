const dayOfWeek = prompt("Enter a day of week").toLowerCase();

if (dayOfWeek === "monday") {
  console.log("I hate Mondays!");
} else if (dayOfWeek === "saturday") {
  console.log("I love Saturdays");
} else if (dayOfWeek === "friday") {
  console.log("TGIF");
} else {
  console.log("meh");
}

let random = Math.random();

if (random < 0.5) {
  console.log("Your number is < 0.5");
} else {
  console.log("your number is greater than 0.5");
}
console.log(random);

// Age

const age = 89;

if (age < 5) {
  console.log("You are a child");
} else if (age < 10) {
  console.log("You are between 5 and 10. You pay $10.");
} else if (age < 65) {
  console.log("You are an adult. You pay $20");
} else {
  console.log("you are a senior. You pay $10");
}
