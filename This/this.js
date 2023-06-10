// Example 1
let obj = {
    name: "John",
    sayHi: function(){
        return "Hi" + " " + this.name;
    }
}
console.log(obj.sayHi());

// Example 2
function hello(){
    return "Hi" + " " + this.name
}

let obj2 = {name:"Wick"};
obj2.say = hello;
console.log(obj2.say());