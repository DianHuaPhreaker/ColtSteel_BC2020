// Descturcuting arrays 

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 222934]; 

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver,...everyoneElse] = scores;

console.log(gold);
console.log(silver);
console.log(everyoneElse);

