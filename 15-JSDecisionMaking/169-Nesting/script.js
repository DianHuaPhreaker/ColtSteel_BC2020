const password = prompt("Please enter a password");

if (password.length >= 6) {
  // Password cannot include space
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password");
  } else {
    console.log("Password cannot contain spaces!");
  }
} else {
  console.log("Password too short. Must be 6+ characters.");
}
