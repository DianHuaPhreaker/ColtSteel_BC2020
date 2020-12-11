// REST - looks like spread but different

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

console.log(sum(34, 3, 4, 23, 23, 23, 23, 23, 23));


function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`and thanks everyone else: ${everyoneElse}`);
}


console.log(raceResults('Tammy', 'Todd', "Tina", "Trevor", "Travis"));