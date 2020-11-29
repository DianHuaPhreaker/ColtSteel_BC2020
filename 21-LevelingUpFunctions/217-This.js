// This in JavaScript
// Most common used in Objects 

const cat = {
    name: 'Blue Steele',
    color: "grey", 
    breed: "scottish fol",
    meow() {
        console.log("Meow meow meow");
        console.log(`${this.name} says meow`);
    }
}
console.log(cat.meow());

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return `EGG`;
    }
}

console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
