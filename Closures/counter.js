function initCounter(){
    let count = 0;
    return function(){
       return count++;
    };
};
let counter = initCounter();
console.log(counter());
console.log(counter());