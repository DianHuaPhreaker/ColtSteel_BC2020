const dayOfWeek = "Monday";
function isWeek(dayOfWeek) {
  if (dayOfWeek === "Monday") {
    console.log("I hate Mondays!");
  } else if (dayOfWeek === "Saturdays") {
    console.log("I love Saturdays");
  } else if (dayOfWeek === "Friday") {
    console.log("TGIF");
  }
}

console.log(isWeek("Monday"));

function isAge(age) {
  if (age < 5) {
    console.log("You are a child");
  } else if (age < 10) {
    console.log("You are between 5 and 10. You pay $10.");
  } else if (age < 65) {
    console.log("Youa are an adult. You pay $20");
  }
}

console.log(isAge(4));
