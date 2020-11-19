// Lexical Scope

function bankRobbery(){
    const heroes = ["Spiderman", "Batman", "Black Panther"];
    function cryForHelp(){
        function inner() {
            for (let hero of heroes){
                console.log(`Please help us, ${hero.toUpperCase()}`);
            }
        }
       inner();
    }
    cryForHelp();
}

console.log(bankRobbery());

