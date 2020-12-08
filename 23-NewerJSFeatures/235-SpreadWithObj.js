// Spread With Objects 

 const feline = {legs: 4, familg: "Felidae"}
 const canine = {isFurry: true, family: 'Caninae'}

console.log({...feline});

console.log({...feline, color: "black"});

const catDog = {...feline, ...canine}

console.log(catDog);

console.log({...canine, ...feline, family: "steele"});

console.log({...[2, 4, 6, 8]});

console.log({..."HI"});

const dataFormForm = {
    email: "blueman@gmail.com",
    password: "tobias123!", 
    username: "tfunke"
}

const newUser = {
    ...dataFormForm, id: 2345, isAdmin: false
}

console.log(newUser);

