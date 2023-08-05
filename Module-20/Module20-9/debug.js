// function getFactorial(number){
//     let factorial = 1;
//     for(let i = 0; i <= 7; i++){
//         factorial = factorial * 2;
//     }
//     return factorial;
// }
// const factorial = getFactorial(8);
// console.log('factorial of 8 is:', factorial)


function getFactorial(number){
    let factorial = 1;
    for(let i = 0; i <=number; i++){
        factorial = factorial * i;
        console.log(i,factorial);
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('factorial of 8 is:', factorial)