let total = 0; 


function sumArrays(arr) {
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
}

console.log(sumArrays([1, 2, 3]));
