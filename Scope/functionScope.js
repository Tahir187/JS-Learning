// Example 

function myFunction(){
    let x = 10; // Function-scoped variable
    if(true){
        var y = 20; // Function-scoped variable
        console.log(x); // output: 10
        console.log(y); // output: 10
    }

    console.log(x); // output: 10
    console.log(y); // output: 20 (accessible due to function scope)
}

myFunction();
console.log(x); // Error: x is not defined (not accessible outside the function)
console.log(y); // Error: x is not defined (not accessible outside the function)