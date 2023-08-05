// 1+2+3+4+5+6+7+8

// for(let i=1; i<7; i++){
//     console.log(i)
// }

// let sum = 0;
// for(let i=1; i<7; i++){
//     sum = sum+i;
//     console.log(i, sum)
// }


function sumfNumbers(number){
    let sum = 0;
for(let i=1; i<= number; i++){
    sum = sum+i;
    console.log(i, sum)
}
return sum;
}
sumfNumbers(10)