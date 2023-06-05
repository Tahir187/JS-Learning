// Variable shadowing
let a = 10;

function foo() {
  let a = 20; // Inner variable shadowing the outer variable
  console.log(a); // Output: 20
}

foo();
console.log(a); // Output: 10


// Example 1
console.log(y);
var y;

// Example 2
console.log(y)
var y = 3;

// example 3
x = 4;
console.log(x);
var x;

// re-declared and re-assigned
var x = 2;
var x = 4;