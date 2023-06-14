let arr = [1, 2, 3, 4, 5];

/*
output 10 and 14
all plus 1+2+3+4+5 = 15
start 2nd element 2+3+4+5 = 14
last minius 1+2+3+4 = 10
   if j !== i   0 0 
    sum = sum + j
   consloe.log('value are not same')
minSum = minSum + j;
*/

let minSum = 0;
for (let i = 0; i <= 5; i++) {
  for (let j = i; j <= i; j++) {
    console.log(j);
    if (j !== i) {
      minSum = minSum + j;
      console.log(minSum);
    } else{
        console.log("values are not same");
    }
  }
}
