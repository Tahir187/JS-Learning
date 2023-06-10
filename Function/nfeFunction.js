let sayHello = function fx(user){
    if(user){
        return `Hello ${user}`;
    }else{
        return fx("anonymous");
    }
}
console.log(sayHello('Tahir'));