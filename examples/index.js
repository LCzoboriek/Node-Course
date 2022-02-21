const col = require('colors');
var msg = require('./messageHolder');

console.log('A message'.red);

console.log(msg.message.red);
console.log(msg.message2.bold);
console.log(msg.doSomething().blue);