// call method
const person={
    name : "John",
    age : 54,
    location: "USA"
};

function checkName(){
    return !!this.name;
}

function checkAge(){
    return !!this.age;
}

function checkLocation(a,b){
    return `!!this.location sum is ${a + b}`;
}

console.log(checkName.call(person));
// console.log(checkAge.call(person));
// console.log(checkLocation.call(person));

// apply method
console.log(checkLocation.apply(person, [3,4]))

// bind method
let fx = checkAge.bind(person);
console.log(fx())