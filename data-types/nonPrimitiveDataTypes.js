// ************ NN-PRIMITIVE DATA TYPES ***************
// example 1 Object
let person = {
    name: "John Doe",
    age : 25,
    isStudent: true
};

console.log(person);

// example 2 array
let numbers = [1,2,3,4,5];
let fruits = ['apple', 'banana', 'orange'];

console.log(numbers);
console.log(fruits);

// example 3 function
function greet(name){
    console.log('Hello, ' + name + '!');
};

greet("Tahir");

// example 4 Date
let today = new Date();
console.log(today);

// example 5 Regular Expression
let pattern = /[a-z]+/;
console.log(pattern);