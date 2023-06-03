// A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `Backtickets can embed another ${str}`;
console.log(str);
console.log(str2);
console.log(phrase);

// example 2
// embed a variable
let name = "Muhammad Tahir";
console.log(`Hello, ${name}`);
// embed an expression
console.log(`the result is ${1 + 2}`);