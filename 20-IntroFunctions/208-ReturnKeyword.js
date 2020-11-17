// Return Keyword 

function add(x, y){
    let sum = x + y;
    return sum;
}
// remember that return keywowrds stops run of function
console.log(add(9, 5)
);


function add(x, y){
    if (typeof x!== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
}


console.log(add(add(1,5), 9));