let funnyWords = require('funny-words');
 
let funnyFunction = (sentence) => {
    return funnyWords(sentence);
    }

let a = funnyFunction("Bye bye nice blue sea!");

console.log(a);

