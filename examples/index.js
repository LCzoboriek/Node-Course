import col from 'colors';
import { message, message2, doSomething } from './messageHolder';

console.log('A message'.red);

console.log(message.red);
console.log(message2.bold);
console.log(doSomething().blue);