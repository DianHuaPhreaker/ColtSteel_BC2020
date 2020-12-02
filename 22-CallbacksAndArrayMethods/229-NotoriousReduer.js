const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// let total = 0; 
// for (let price of prices){
//     total += price
// }

// console.log(total);

const total = prices.reduce((total, price) => {
    return total + price;
})

// or 
const total2 = prices.reduce((total2, price) => total2 + price)

console.log(total);
console.log(total2);

const minPrice = prices.reduce((min, price) => {
    if (price > min) {
        return price;
    }
    return min;
})

console.log(minPrice);

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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score){
        return bestMovie
    }
    return bestMovie;
})

console.log(highestRated);


const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num)
