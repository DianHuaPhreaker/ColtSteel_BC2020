const user = {
    email: "harvey@gmail.com",
    password: "Scott1948smhas",
    firstName: "Harvey",
    lastName: "Milk",
    born: 1945,
    died: 1979,
    bio: "wonderful man",
    city: "San Francisco",
    state: "California"
}




const { email, firstName, lastName, city, bio} = user; 
console.log(user);

// 
const { born: birthYear, died: deathYear} = user; 
console.log(birthYear);
console.log(deathYear)

const user2 = {
    email: "jenvey@gmail.com",
    password: "asdfe",
    firstName: "Karvey",
    lastName: "Silk",
    born: 1938,
    bio: "wonderful man",
    city: "San Francisco",
    state: "California"
}

const {died='n/a'} = user2

// Destructuring Params

function fullName(user) {
    const {fullName, lastName} = user;
    return `${firstName} ${lastName}`
}

console.log(fullName(user));

