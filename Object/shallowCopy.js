// example 1
let obj = {
    name : "John",
    age: 21
}
console.log(obj)
let person = obj;
person.name = "Wick";
console.log(person);

// example 2 using Object.assign()
let obj2 = {
    name : "Jhon",
}

console.log(obj2)
let person2 = Object.assign({}, obj2);
person2.name = "Sena";
console.log(person2)

// exmple 2 using spread operator
let person3 = {...person2};
person3.name = "Thor"
console.log(person3)
console.log("----------")

// example 3 nested object
let obj3 = {
    name: "Tahir",
    address:{
        city:"Karachi",
        state:"Sindh"
    }
};
let person4 = {...obj3};
person4.address.city = 'shikarpur';
console.log(obj3);
console.log(person4);

// there is problem in example 3 sloution
// we will solve that problem in DEEP COPY.