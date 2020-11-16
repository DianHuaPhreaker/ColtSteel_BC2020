// "todos" project 

let todo = prompt("What would you like to do?"); 
let quit = "quit";


while (todo != quit) {
    if (todo === "new") {
        todo = prompt("Enter a todo");
        console.log(`${todo} added to list`);
    }
}