// example of count
let count = 0;
function showCount(x){
    count++;
    console.log({count, x});
}

function debounce(fx, time){
    let id = null;
    return function(x){
        if(id){
            clearTimeout(id);
        }
        id = setTimeout(()=>{
            fx(x);
            id = null;
        }, time);
    };
}

let showCountD = debounce(showCount, 2000);
setTimeout(showCountD, 1000, 1);
setTimeout(showCountD, 2100, 2);
setTimeout(showCountD, 3000, 3);