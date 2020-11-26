// Defining methods 
// method - we can add functions as properties on objects  

const myMath = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    }, 
    cube: function (num) {
        return num ** 3;
    }
}

console.log(myMath)

console.log(myMath.PI);

console.log(myMath.square);

console.log(myMath.square(2));

// shorter syntax 

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    }, 
    cube(num) {
        return num ** 3;
    }
}