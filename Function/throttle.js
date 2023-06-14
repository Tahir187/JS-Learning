// example of count
let count = 0;
function showCount(x){
    count++;
    console.log({count, x});
}

function throttle(fx, time){
    let id = null;
    let args = [];
    return function(x){
        if(!id){
            id = setTimeout(()=>{
                fx(args[args.length-1]);
                id = null;
            }, time);
        }
        args.push(x);
    }
}

let showCountT = throttle(showCount, 3000);
setTimeout(showCountT, 1000, 1);
setTimeout(showCountT, 2000, 2);
setTimeout(showCountT, 2500, 3);
setTimeout(showCountT, 5000, 4);