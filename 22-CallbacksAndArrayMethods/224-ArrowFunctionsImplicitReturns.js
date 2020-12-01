// Arrow Function - Implicit Returns 
// we can leave off return 

// from this 
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

// to this
const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)


console.log(rollDie2());
console.log(rollDie2());
console.log(rollDie2());
console.log(rollDie2());


const add = (a, b) => a + b; 
console.log(add(3, 4));