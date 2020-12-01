// creates a new array with all elements that pass test implemented by providing function 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

numbers.filter(n => {
    return n === 4
})

console.log(numbers.filter(n => {
    return n === 4
})
);

console.log(numbers.filter(n => {
    return n < 10
}))

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



const badMovies = movies.filter(movie => {
    return movie.score < 80;
})

console.log(badMovies);

const dates = movies.filter(m => m.year < 1990)
console.log(dates);

const goodMovies = movies.filter(m => m.score > 95)
const goodTitles = goodMovies.map(m => m.title)
console.log(goodMovies);
console.log(goodTitles);
// or
movies
    .filter(m => m.score > 80)
    .map(m => m.title);
    
console.log(movies
    .filter(m => m.score > 80)
    .map(m => m.title));