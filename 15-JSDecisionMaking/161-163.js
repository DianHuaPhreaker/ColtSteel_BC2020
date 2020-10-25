// Comparison Operators
console.log(1 > 3);
console.log(1 < 3);
console.log(9 == "9");
console.log(-5 >= -6);

// 163
//= = (double equals)
// checks for equality of value, but not equality of type
// it coerces both values to same type and them compares them
// this can lead ot some unexpected results
console.log(1 == 1);
console.log(1 == "1");
console.log(null == undefined);
console.log(1 == 2);
console.log("a" == "b");
console.log(0 == false);

// tripple equals
// does care about type and value

console.log(1 === 1);
console.log(1 === "1");
console.log(0 === false);

// != not equals

console.log(1 != 2);
console.log(1 != "2");
console.log(1 != "1");
