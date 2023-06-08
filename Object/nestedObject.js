// Example 1
person = {
    name: "John",
    address:{
        city: "Karachi",
        state:"Sindh"
    }
};
console.log(person.address.city);

// Example 2
let addrerssObject = {city:"Shikarpur",state:"Sindh"};
let person2 = {
    name : "John",
    addrerss: addrerssObject
}
console.log(person2);