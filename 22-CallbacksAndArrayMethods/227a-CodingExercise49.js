function validUserNames(arr){
    let newValidUserNames = arr.filter(m => m.length < 10)
    return newValidUserNames
}

console.log(validUserNames(["mark", "stacysmom1978", "adsfea223asdf", "carrie98", "MoanaFan90210"]));