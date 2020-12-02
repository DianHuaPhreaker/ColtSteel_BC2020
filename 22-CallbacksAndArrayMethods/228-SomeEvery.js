const exams = [100, 92, 73, 84, 65, 96, 70, 81, 93];

// note that every test whether all elements in the array pass the provided function. It returns a boolean value
console.log(exams.every(score => score >= 50));

// similar to every, but returns true if any of the array elements pass the test function 
console.log(exams.some(score => score >= 95));


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1990
    },
    {
        title: 'Parasite',
        score: 95, 
        year: 2018
    },
    {
        title: 'Alien',
        score: 90,
        year: 1980
    },
    {
        title: 'End Game',
        score: 90, 
        year: 2019
    },
    {
        title: 'Water World',
        score: 50, 
        year: 1994
    },
]

console.log(movies.some(movie => movie.year > 2015));

