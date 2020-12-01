// 
console.log("Hello!!!");
setTimeout(() => {
    console.log("Are you still there?");
}, 3000)

console.log("Goodybye");


// set interval 
// repeat something at an interval 
const id = setInterval(() => {
    console.log(Math.random());
}, 2000)

clearInterval(id)