// example of fibonacci series
const memoize = require('./memoize');
function fibonacci(n){
    if(n <= 1){
        return n;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
};

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(10));