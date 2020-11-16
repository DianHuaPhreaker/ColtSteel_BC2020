// For Of Loop 

const subReddits = ["cringe", "trucks", "news", "technology", "all"];

for (let i = 0; i < subReddits.length; i++){
    console.log(`Visit reddit.com/r/ ${subReddits[i]}`);
}

// or 

for (let sub of subReddits){
    console.log(`Visit reddit.com/r/ ${subReddits}`);
}

const seatingChart = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    [ 'g', 'h', 'i']
];

for (let row of seatingChart){
for (let student of row){
    console.log(student);
}
}

// we can use for of loop with string 

for (let char of "hello world"){
    console.log(char);
}


const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers) {
    console.log(num * num);
}