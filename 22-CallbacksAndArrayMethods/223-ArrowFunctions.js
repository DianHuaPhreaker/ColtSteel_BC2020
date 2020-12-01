// Intro to Arrow Function 
// used to create function expression 
 

const add = function(x, y){
    return x + y;
}
console.log(add(3, 4));


const square = (x) => {
    return x; 
}

console.log(square(3, 6));

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDie());
console.log(rollDie());
console.log(rollDie());


const greet = function(string){
    return `Hey ${string}`;
};


console.log(greet("Luna"));