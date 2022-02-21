var args = process.argv;
// What is argv
// console.log(args[2]);

for (var i = 2; i < args.length; i++){
    console.log(args[i]);
}
// This essentially will output all the arguments from the command line, so when it sees a space is assumes its the next argument
// sh-3.2$ node commandLine.js hello from node <---- INPUT
// hello <----- OUTPUT
// from
// node

console.log(args.slice(3));
// sh-3.2$ node commandLine.js hello from node <----- INPUT
// hello 
// from
// node
// [ 'from', 'node' ] <----- OUTPUT

console.log('The first values is ' + args[2]);

// sh-3.2$ node commandLine.js hello from node <----- INPUT
// hello
// from
// node
// [ 'from', 'node' ]
// The first values is hello < ------ OUTPUT

//ES6 template strings - use 'backtiks' or 'oblique quotes'
