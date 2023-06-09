// example 1 json.parse and json.stringify
let addressObject = {city:"Karachi", state:"sindh"};

let obj = {
    name:"John",
    address: addressObject
}

let person = JSON.parse(JSON.stringify(obj));
person.address.city = "Shikarpur";
console.log(obj.address);
console.log(person.address);

// example 2 structuredClone
let obj2 = {
    name:"Wick",
    address : addressObject
}

obj2.me = obj2;
let person2 = structuredClone(obj2);
console.log(obj2);
console.log(person2);