function executor(toNumber) {
    var result = '42';
    return toNumber(result);
}


function toNumber(param) {
    return Number(param);
}

console.log(executor(toNumber));

// Converts strings to numbers using the Number class (notice the capital letter at the start of number)

// We can also pass an anon function across

console.log(executor(toNumber));    

console.log(executor(function(param){
    return Number(param);
}));

console.log(executor(param => Number(param)));

// all of these output the same thing, just in different ways, i do prefer the anon function on line 23 however as its a one line command

