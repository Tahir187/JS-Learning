// example of count
let count = 0;
function showCount(){
    count++;
    console.log({count});
}

function debounce(fx, time){
    let id = null;
    return function(){
        if(id){
            clearTimeout(id);
        }
        id = setTimeout(fx, time);
    };
}

let showCountD = debounce(showCount, 2000);
setTimeout(showCountD, 1000);
setTimeout(showCountD, 1500);
setTimeout(showCountD, 3000);