const arr = ["timothee", "  darth_hater  ", "sassyfrassy  ", " elton john "]



function cleanNames(arr){
    return arr.map(function(name) {
        return name.trim();
    });
}
console.log(cleanNames);