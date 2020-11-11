// Accessing data out of objects 
let comment = {
    username: 'sillyGoose420',
    downVotes: 19,
    upVotes: 214,
    netScore: 195, 
    commentText: 'Taste like chicken',
    tags: ["#hilarious", "#funny", "sillys"],
    isGilded: false
}

console.log(comment);

console.log(comment["username"]);

console.log(comment.username);

const years = {1999: "good", 2020: "bad"}

console.log(years["2020"]);
// note that [] will convert to a string

