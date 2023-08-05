function factorial(number){
    let i = number;
    let result =1;
    while(i >= 1){
        result =result * 1;
        i--;
    }
    return result
}
const output = factorial(7);
console.log('result output:', output)