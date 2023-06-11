function heavy(x){
    console.log(`${x} :heavy`);
    return `${x} :heavy`;
}

function memoizer(fx){
    let map = new Map();

    return function(x){
        if(map.has(x)){
            return map.get(x);
        }else{
            let result = fx(x);
            map.set(x, result);
            return result;
        }
    };
}

let memoizedHeavy = memoizer(heavy);

console.log(memoizedHeavy(4));
console.log(memoizedHeavy(5));