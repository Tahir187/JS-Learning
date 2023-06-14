// Example 1 this is in simple function
function sum (a){
    return function(b){
        return function(c){
            console.log(a,b,c);
            return a + b + c;
        };
    };
};

console.log(sum(2)(3)(5));

// example 2 this will be in arrow function

let add = a => b => c => {console.log(a,b,c); return a + b + c } ;
console.log(add(3)(1)(1));

// Example 3
let log = time => type => msg => {
    return `At: ${time.toLocaleString()}, bio's: ${type}, message: ${msg}`;
}
console.log(log(new Date())('error')('turn of your PC'));

// Another example this for current data and time
let logNow = log(new Date());
console.log(logNow('warning')('Your PC is hacked'));

// Another example this time for error
let logERrorNow = log(new Date())('error');
console.log(logERrorNow('Your data is leaked'));