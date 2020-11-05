// Push and Pop
// Push - add to end

let movieLine = ["tom", "nancy", "pablo"];
movieLine.push("oliver");
console.log(movieLine);
// note that movieLine is now updated

movieLine.push("eva");

console.log(movieLine);

// Pop - remove from end

console.log(movieLine.pop());
console.log(movieLine);

let person = movieLine.pop();
console.log(person); //oliver
console.log(movieLine);

// push and pop in conjuction

let barbell = [];
barbell.push(45);
console.log(barbell);
// 45 pounds on barbell
barbell.push(45);
console.log(barbell);
// 45, 45 pounds on barbell
barbell.push(25);
console.log(barbell);
// 45, 45, and 25 on barbell
barbell.push(10);
console.log(barbell);
// 45, 45, 25, and 10
barbell.push(5);
console.log(barbell);
// 45, 45, 25, 10, and 5 on barbell
barbell.pop();
console.log(barbell);
// 45, 45, 25, 10 on barbell
