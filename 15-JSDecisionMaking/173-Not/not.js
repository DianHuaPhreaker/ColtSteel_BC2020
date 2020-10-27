// !null true
// !(0 === 0) false
// !(3 <= 4)

console.log(!false);
console.log("-------------------------");

const firstName = prompt("Enter your first name");
if (!firstName) {
  firstName = prompt("Enter your name");
}
